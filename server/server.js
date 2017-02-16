const express = require('express');
const path = require('path');
const open = require('open');
const compression = require('compression');

/* eslint-disable no-console */

const port = Number(process.env.PORT || 3000);
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, (err) => {
  if(err) {
    console.log('samething terrible just happened');
  } else {
    console.log(`Server is listening on port ${port}`);
    open('http://localhost:' + port);
  }
})