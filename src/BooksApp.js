import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBookForm from './components/AddBookForm';
import Book from './components/Book';
import { addBookAsync, removeBookAsync, fetchBooksAsync } from './redux/books/books';

const BooksApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, []);
  const submitBookToStore = (book) => {
    const newBook = {
      id: `${book.title}-${book.id}-${book.author}-${book.category}`,
      title: book.title,
      author: book.author,
      currentChapter: 'Not started',
      category: book.category,
      progress: 0,
    };
    dispatch(addBookAsync(newBook));
  };
  const removeBookFromStore = (id) => {
    dispatch(removeBookAsync(id));
  };
  const bookList = useSelector((state) => state.books);
  return (
    <div className="container cont-books">
      <div className="centerer">
        <div>
          {bookList.books.map((book) => (
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
