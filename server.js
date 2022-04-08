const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public/css'));
app.use(express.static('images'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const listener = app.listen(process.env.PORT || 5500, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
