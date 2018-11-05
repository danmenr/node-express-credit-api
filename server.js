const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const credits = require('./routes/api/credits');

const app = express();

const port = process.env.PORT || 5000;

// DB Config
const db = require('./config/keys').mongoURI;
// Connecto to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello world!'));

//use Routes
app.use('/api/users', users);
app.use('/api/credits', credits);

app.listen(port, () => console.log(`Server running on port ${port}`));