const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const credits = require('./routes/api/credits');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

// DB Config
const db = require('./config/keys').mongoURI;

// Connecto to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

//use Routes
app.use('/api/users', users);
app.use('/api/credits', credits);

app.listen(port, () => console.log(`Server running on port ${port}`));