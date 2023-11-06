const Book = require('../models/Book');

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a book by its ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new book
const createBook = async (req, res) => {
  const { title, author, summary } = req.body;

  if (!title || !author || !summary) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const existingBook = await Book.find({
    title: title
  });

  if(existingBook.length != 0) {
    return res.status(400).json(`Book with title: ${title} already exists.`);
  }

  const newBook = new Book({
    title,
    author,
    summary,
  });

  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a book's details
const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: 'Book does not exist!' });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndRemove(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(deletedBook);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {getAllBooks, getBookById, createBook, updateBook, deleteBook};