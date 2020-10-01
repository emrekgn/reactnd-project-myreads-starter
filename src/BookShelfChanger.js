import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = props => {
  const { book, onBookShelfChange } = props

  return (
    <div className="book-shelf-changer">
      <select onChange={(event) => onBookShelfChange(book, event.target.value)} value={book.shelf ? book.shelf : "none"}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
};

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  onBookShelfChange: PropTypes.func.isRequired,
};

export default BookShelfChanger;