import React from 'react';

const AddBookForm = () => (
  <>
    <form className="form">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <input placeholder="Book Title" />
      <input placeholder="Author" />
      <select>
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

export default AddBookForm;
