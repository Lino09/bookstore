import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  title, author, category,
  progress = Math.floor(Math.random() * 101),
  currentChapter = Math.floor(Math.random() * 16),
  removeBookProps, id,
}) => (
  <div className="book">
    <div className="book-col flex flex-col justify-center">
      <small>{category}</small>
      <h3 className="book-title">{title}</h3>
      <small className="book-author">{author}</small>
      <div className="book-opt">
        <ul>
          <li><button type="button">Comments</button></li>
          <li><button type="button" onClick={() => removeBookProps(id)}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
    </div>
    <div className="book-col flex flex-col items-center w-ful p-8 max-h-56">
      <h3 className="mb-4">Completed</h3>
      <CircularProgressbar value={progress} text={`${progress}%`} />
    </div>
    <div className="w-full flex flex-col items-start justify-around">
      <small className="text-gray-400">CURRENT CHAPTER</small>
      <small>{`Chapter ${currentChapter}`}</small>
      <button
        className="bg-blue-400 px-2 py-1 text-sm text-blue-100 font-light
        hover:bg-blue-500 hover:text-white rounded"
        type="button"
      >
        UPDATE PROGRESS
      </button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  category: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  currentChapter: PropTypes.string.isRequired,
  removeBookProps: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

Book.defaultProps = {
  author: 'Anonimous',
};

export default Book;
