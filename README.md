
# Books API Documentation

This is a RESTful API for managing books. It provides the following features:

- Create a new book (title, author, summary)
- View a list of all books
- View details of a specific book by its ID
- Update a book's details
- Delete a book

## Table of Contents
- [API Endpoints](#api-endpoints)
- [Local Setup](#local-setup)
- [Usage](#usage)

## API Endpoints

### Get All Books

- URL: `/api/books`
- Method: GET
- Description: Retrieve a list of all books.

### Get Book by ID

- URL: `/api/books/:id`
- Method: GET
- Description: Retrieve details of a specific book by its ID.

### Create a New Book

- URL: `/api/books`
- Method: POST
- Description: Create a new book. Requires a JSON request body with `title`, `author`, and `summary` fields.

### Update Book

- URL: `/api/books/:id`
- Method: PUT
- Description: Update the details of a specific book by its ID. Requires a JSON request body with the fields to be updated.

### Delete Book

- URL: `/api/books/:id`
- Method: DELETE
- Description: Delete a specific book by its ID.

## Local Setup

To run this API locally, follow these steps:

1. Clone the repository.
2. Install Node.js and use MongoDB atlas.
3. Install project dependencies using `npm install`.
4. Start the server with `npm start`.

## Usage

You can use API testing tools like Postman or CURL to interact with the endpoints. Here are some example requests:

### Create a Book

`http://localhost:3000/book/`
Give the data in body like:-
`{
  "title": "Book3",
  "author": "Author3",
  "summary": "Summary of Book3!"
}`

### Get all books
`http://localhost:3000/book/`

### Get a book by Id:-
`http://localhost:3000/book/:id`

### Update a book by Id:-
`http://localhost:3000/book/:id`
Give the data in body like:-
`{
  "title": "Book3",
  "author": "Author3",
  "summary": "Summary of Book3!"
}`

### Delete book
`http://localhost:3000/book/:id`
