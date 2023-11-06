const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookRoute = require('./routes/books');

const app = express();
app.use(express.json());

// Define your routes and controllers here.

const PORT = process.env.PORT || 3000;
app.use('/book', bookRoute);

try {
  mongoose.connect('mongodb+srv://baibhavkumar303:baibhavkumar@cluster0.h8cvf4a.mongodb.net/Books?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('DB Connected!');
  });

} catch (error) {
  throw new Error('Error in connecting mongoDB!!!');
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});