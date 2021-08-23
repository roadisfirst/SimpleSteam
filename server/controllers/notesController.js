const express = require('express');
const router = new express.Router();

const {
  getNotesByUserId,
  getNoteByIdForUser,
  addNoteToUser,
  updateNoteByIdForUser,
  updateNoteStatusByIdForUser,
  deleteNoteByIdForUser,
} = require('../services/notesService');

const {
  asyncWrapper,
} = require('../utils/apiUtils');

const {
  noteValidator,
} = require('../middlewares/validationMiddleware');

const {
  InvalidRequestError,
} = require('../utils/errors');

router.get('/', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const offset = req.query.offset ? parseInt(req.query.offset) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit) : 0;

  const notes = await getNotesByUserId(userId, offset, limit);
  res.json({
    offset,
    limit,
    count: notes.count,
    notes: notes.notes,
  });
}));

router.get('/:id', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const {id} = req.params;

  const note = await getNoteByIdForUser(id, userId);

  if (!note) {
    throw new InvalidRequestError('No note with such id found!');
  }

  res.json({note});
}));

// router.post('/', noteValidator, asyncWrapper(async (req, res) => {
//   const {userId} = req.user;

//   await addNoteToUser(userId, req.body);

//   res.json({message: 'Success'});
// }));

// router.put('/:id', noteValidator, asyncWrapper(async (req, res) => {
//   const {userId} = req.user;
//   const {id} = req.params;
//   const data = req.body;

//   await updateNoteByIdForUser(id, userId, data);

//   res.json({message: 'Note updated successfully'});
// }));

// router.patch('/:id', asyncWrapper(async (req, res) => {
//   const {userId} = req.user;
//   const {id} = req.params;

//   await updateNoteStatusByIdForUser(id, userId);

//   res.json({message: 'Status updated'});
// }));

// router.delete('/:id', asyncWrapper(async (req, res) => {
//   const {userId} = req.user;
//   const {id} = req.params;
//   await deleteNoteByIdForUser(id, userId);

//   res.json({message: 'Note deleted successfully'});
// }));

module.exports = {
  notesRouter: router,
};
