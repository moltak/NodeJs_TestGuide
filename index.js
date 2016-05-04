'use strict';

let port = process.env.PORT || 3000;
let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});

module.exports = app;