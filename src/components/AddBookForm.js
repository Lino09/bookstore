import React from 'react';
import PropTypes from 'prop-types';

const AddBookForm = ({ submitBookProps }) => (
  <>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitBookProps({
          title: e.target.title.value,
          author: e.target.author.value,
          category: e.target.category.value,
        });
        e.target.title.value = '';
        e.target.author.value = '';
      }}
      className="form"
    >
      <h2 className="form-title">ADD NEW BOOK</h2>
      <input name="title" required placeholder="Book Title" />
      <input name="author" required placeholder="Author" />
      <select name="category">
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Psychology">Psychology</option>
        <option value="Drama">Drama</option>
        <option value="History">History</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  </>
);

AddBookForm.propTypes = {
  submitBookProps: PropTypes.func.isRequired,
};

export default AddBookForm;
