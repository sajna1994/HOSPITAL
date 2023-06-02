const express = require('express');
const morgan = require('morgan');
const app = new express();
const api=require('./sample');
require('dotenv').config()
app.use(morgan('dev'));
app.use('/api',api);

const PORT=process.env.PORT;
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});

