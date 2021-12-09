import axios from 'axios';

const FETCH_BOOKS = 'FETCH_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const APP_ID = 'b2rHxtywICisc0wDQppf';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
/* eslint-disable no-console */

export const addBookAsync = (payload) => {
  const {
    title, author, category, id, currentChapter, progress,
  } = payload;
  return function foo(dispatch) {
    axios.post(`${BASE_URL}/${APP_ID}/books/`, {
      item_id: id,
      title,
      category,
    })
      .then((response) => {
        if (response.status === 201) {
          dispatch(addBook({
            title, author, category, id, currentChapter, progress,
          }));
        } else { console.log('something went wrong'); }
      })
      .catch((err) => console.log(err));
  };
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const removeBookAsync = (payload) => {
  const ID = payload;
  return function foo(dispatch) {
    axios.delete(`${BASE_URL}/${APP_ID}/books/${ID}`, { item_id: ID })
      .then((response) => {
        console.log(response);
        dispatch(removeBook(ID));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchBooks = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

export const fetchBooksAsync = () => (
  function foo(dispatch) {
    axios.get(`${BASE_URL}/${APP_ID}/books/`)
      .then((response) => {
        const { data } = response;
        const books = [];
        // eslint-disable-next-line
        for(const [key, val] of Object.entries(data)) {
          books.push({ id: key, title: val[0].title, category: val[0].category });
        }
        dispatch(fetchBooks(books));
      })
      .catch((err) => console.log(err));
  }
);

const initialState = {
  loading: false,
  books: [],
  error: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, payload] };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter((book) => book.id !== payload) };
    case FETCH_BOOKS:
      return { ...state, books: payload };
    default:
      return state;
  }
};

export default reducer;
