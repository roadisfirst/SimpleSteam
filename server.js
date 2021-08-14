const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + 'dist/simple-steam'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'dist/simple-steam/index.html'));
});

app.listen(process.env.PORT || 8080);