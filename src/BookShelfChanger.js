import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = props => {
  const { bookId, currentBookShelf, onBookShelfChange } = props

  return (
    <div className="book-shelf-changer">
      <select onChange={(event) => onBookShelfChange(bookId, event.target.value)} value={currentBookShelf}>
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
  bookId: PropTypes.string.isRequired,
  currentBookShelf: PropTypes.string.isRequired,
  onBookShelfChange: PropTypes.func.isRequired,
};

export default BookShelfChanger;