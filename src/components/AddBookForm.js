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
          id: `${(Math.floor(Math.random() * 999).toString())}-${(Math.floor(Math.random() * 999).toString())}-${(Math.floor(Math.random() * 999).toString())}-${(Math.floor(Math.random() * 999).toString())}`,
        });
        e.target.title.value = '';
        e.target.author.value = '';
      }}
      className="form"
    >
      <h2 className="form-title ">ADD NEW BOOK</h2>
      <input name="title" required placeholder="Book Title" />
      <input name="author" required placeholder="Author" />
      <select name="category">
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Psychology">Psychology</option>
        <option value="Drama">Drama</option>
        <option value="History">History</option>
      </select>
      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-indigo-100 font-bold rounded
        hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white"
      >
        Submit
      </button>
    </form>
  </>
);

AddBookForm.propTypes = {
  submitBookProps: PropTypes.func.isRequired,
};

export default AddBookForm;
