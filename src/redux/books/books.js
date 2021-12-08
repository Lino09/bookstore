const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== payload);
    }
    default:
      return state;
  }
};

export default reducer;
