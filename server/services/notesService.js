const {Note} = require('../models/noteModel');

const getNotesByUserId = async (userId, offset, limit) => {
  const count = await Note.find({userId}).count();
  const notes = await Note.find({userId}, '-__v')
      .skip(offset)
      .limit(limit);
  return {notes, count};
};

const getNoteByIdForUser = async (bookId, userId) => {
  const note = await Note.findOne({_id: bookId, userId}, '-__v');
  return note;
};

const addNoteToUser = async (userId, notePayload) => {
  const note = new Note({...notePayload, userId});
  await note.save();
};

const updateNoteByIdForUser = async (noteId, userId, data) => {
  await Note.findOneAndUpdate({_id: noteId, userId}, {$set: data});
};

const updateNoteStatusByIdForUser = async (noteId, userId) => {
  const note = await Note.findOne({_id: noteId, userId});
  const newStatus = !note.completed;
  await Note.updateOne({_id: noteId, userId}, {$set: {completed: newStatus}});
};

const deleteNoteByIdForUser = async (noteId, userId) => {
  await Note.findOneAndRemove({_id: noteId, userId});
};

module.exports = {
  getNotesByUserId,
  getNoteByIdForUser,
  addNoteToUser,
  updateNoteByIdForUser,
  updateNoteStatusByIdForUser,
  deleteNoteByIdForUser,
};
