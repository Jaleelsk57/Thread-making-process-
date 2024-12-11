// const express = require('express');
// const bodyparser = require('body-parser');
// const cors = require('cors');
// const Import_Table = require('./Routes/cotton');
// const app = express();
// app.use(cors());
// app.use(bodyparser.urlencoded({ extended :  true}));
// app.use(bodyparser.json());
// app.use('/Import_Table', Import_Table);





// module.exports = app;
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const cotton = require('./Routes/cotton');
const app = express();
const regi = require('./Routes/register');
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/cotton', cotton);
app.use('/regis',regi);





module.exports = app;