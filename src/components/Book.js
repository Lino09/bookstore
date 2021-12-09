import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  title, author, category, progress, currentChapter, removeBookProps, id,
}) => (
  <div className="book">
    <div className="book-col">
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
    <div className="book-col">
      Progress Pie:
      {progress}
    </div>
    <div className="book-col">
      <small>CURRENT CHAPTER</small>
      <small>{currentChapter}</small>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  category: PropTypes.string.isRequired,
  progress: PropTypes.number,
  currentChapter: PropTypes.string,
  removeBookProps: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

Book.defaultProps = {
  currentChapter: 'The beginning',
  progress: 0,
  author: 'Anonimous',
};

export default Book;
