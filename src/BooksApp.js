import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBookForm from './components/AddBookForm';
import Book from './components/Book';
import { addBook, removeBook } from './redux/books/books';

const BooksApp = () => {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const submitBookToStore = (book) => {
    const newBook = {
      id: Math.floor(Math.random() * 999999),
      title: book.title,
      author: book.author,
      currentChapter: 'Not started',
      category: book.category,
      progress: 0,
    };
    dispatch(addBook(newBook));
  };
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="container cont-books">
      <div className="centerer">
        <div>
          {bookList.map((book) => (
            <Book
              title={book.title}
              id={book.id}
              key={book.id}
              author={book.author}
              category={book.category}
              progress={book.progress}
              currentChapter={book.currentChapter}
              removeBookProps={removeBookFromStore}
            />
          ))}
          <AddBookForm
            submitBookProps={submitBookToStore}
          />
        </div>
      </div>
    </div>
  );
};

export default BooksApp;
