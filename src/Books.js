import React from 'react';
import AddBookForm from './components/AddBookForm';
import Book from './components/Book';

const bookList = [{
  name: '12 Rules for life', author: 'Jordan Peterson', category: 'Psychology', progress: 0.66, currentChapter: 'First',
},
{
  name: 'The Fallen\'s Bible', author: 'Fernando Trujillo', category: 'Horror', progress: 0.9, currentChapter: 'last',
},
{
  name: 'Harry Potter', author: 'J. K. Rowling', category: 'Fantasy', progress: 0.33, currentChapter: 'First',
},
];

const Books = () => (
  <div className="container cont-books">
    <div className="centerer">
      <div>
        {bookList.map((book) => (
          <Book
            title={book.name}
            key={book.name}
            author={book.author}
            category={book.category}
            progress={book.progress}
            currentChapter={book.currentChapter}
          />
        ))}
        <AddBookForm />
      </div>
    </div>
  </div>
);

export default Books;
