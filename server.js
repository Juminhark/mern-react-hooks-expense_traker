const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

const connectDB = require('./config/db');
const transaction = require('./routes/transaction');
dotenv.config({ path: './config/config.env'});

// db 연결
connectDB();

const app = express();

// client가 보낸정보를 사용하기 위해
app.use(express.json());

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


app.use('/api/v1/transaction', transaction);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));