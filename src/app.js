const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/variables.config');

const app = express();

mongoose
  .connect(keys.MONGO_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(console.log('MongoDB connected'))
  .catch(error => console.log(error));

app.use(require('morgan')('dev'));

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Content-Type', 'Origin'],
    credentials: true,
    optionsSuccessStatus: 200,
    maxAge: -1
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
const audioRoutes = require('./routes/audio');
const testRoutes = require('./routes/test');
const textRoutes = require('./routes/text');

app.use('/api/auth', authRoutes);
app.use('/api/audio', audioRoutes);
app.use('/api/test', testRoutes);
app.use('/api/text', textRoutes);

module.exports = app;
