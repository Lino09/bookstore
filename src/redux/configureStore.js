// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
});

const store = createStore(reducer, applyMiddleware(ThunkMiddleware, logger));

export default store;
