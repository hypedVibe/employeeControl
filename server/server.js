const express = require('express');
const path = require('path');
const open = require('open');
const bodyParser = require('body-parser');
const compression = require('compression');

require('./models/db');
require('./models/depStructure');
require('./models/employee');

const routes = require('./routes/routes');

/* eslint-disable no-console */

const port = Number(process.env.PORT || 3000);
const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api', routes);

app.listen(port, (err) => {
  if(err) {
    console.log('something terrible just happened');
  } else {
    console.log(`Server is listening on port ${port}`);
    open('http://localhost:' + port);
  }
})