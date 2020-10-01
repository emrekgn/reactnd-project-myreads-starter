import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    query: '',
    books: [],
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
    if (query !== '') {
      BooksAPI.search(query).then((books) => this.setState({
        books
      }));
    } else {
      this.setState({
        books: []
      });
    }
  }

  clearQuery = () => {
    this.updateQuery('')
  }

  handleBookShelfChange = (book, shelf) => {
    // Update shelf attribute of the specified book for search page
    this.setState(currentState => ({
      books: currentState.books.map(b => (
        b.id === book.id ?  {...b, shelf: shelf} : b
      ))
    }))
    // Trigger onBookShelfChange() to update main page
    this.props.onBookShelfChange(book, shelf)
  }

  render() {
    const { query, books } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input  type="text" 
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            { books.length > 0 && books.map((book) => (
              <li key={book.id}>
                  <Book book={book} onBookShelfChange={this.handleBookShelfChange} />
              </li>
            ))}
          </ol>
        </div>
    </div>
    )
  }
}

SearchBooks.propTypes = {
  onBookShelfChange: PropTypes.func.isRequired,
};

export default SearchBooks;