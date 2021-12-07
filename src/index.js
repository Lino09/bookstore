import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
);
