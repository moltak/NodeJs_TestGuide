'use strict';

let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

module.exports = app;