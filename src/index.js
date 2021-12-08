import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import BooksApp from './BooksApp';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import store from './redux/configureStore';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<BooksApp />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </Provider>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
);
