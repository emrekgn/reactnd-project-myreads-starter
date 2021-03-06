import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const Book = props => {
  const { book, onBookShelfChange } = props

  return (
    <div>
      {
        book.imageLinks && book.imageLinks.smallThumbnail && book.title &&
        <div className="book">
          <div className="book-top">
            <div className="book-cover" 
                style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
            </div>
            <BookShelfChanger book={book} onBookShelfChange={onBookShelfChange} />
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors && <div className="book-authors">{book.authors.join(", ")}</div>}
        </div>
      }
    </div>
  )
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onBookShelfChange: PropTypes.func.isRequired,
};

export default Book;