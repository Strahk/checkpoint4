const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const boxingirl = require('./routes');

const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/boxingirl', boxingirl);

app.listen(port, err => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});