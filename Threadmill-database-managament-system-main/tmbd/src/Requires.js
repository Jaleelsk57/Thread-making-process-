const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const Import_Table = require('./Routes/Import_Table');
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/Import_Table', Import_Table);





module.exports = app;