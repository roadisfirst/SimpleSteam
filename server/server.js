const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist/simple-steam')));

app.get('/', (req, res) => {
  console.log('hooray!')
  res.sendFile(path.join(__dirname + '../client/dist/simple-steam/index.html'));
});

// app.get('/user/login', (req, res) => {
//   console.log('login get working!');
// });

// app.post('/user/login', (req, res) => {
//   console.log('login post working!');
// });

app.listen(process.env.PORT || 3080);

