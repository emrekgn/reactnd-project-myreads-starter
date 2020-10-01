import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books
    }));
  }

  onBookShelfChange = (bookId, shelf) => {
    if (shelf === "none") {
      return;
    }
    BooksAPI.update(bookId, shelf).then(() => this.setState(currentState => ({
      books: currentState.books.map((book) => (
        book.id === bookId ?  {...book, shelf: shelf} : book
      ))
    })))
  };

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks />
        )} />

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf name="Currently Reading" books={this.state.books.filter(book => book.shelf === "currentlyReading")} onBookShelfChange={this.onBookShelfChange} />
              <BookShelf name="Want to Read" books={this.state.books.filter(book => book.shelf === "wantToRead")} onBookShelfChange={this.onBookShelfChange} />
              <BookShelf name="Read" books={this.state.books.filter(book => book.shelf === "read")} onBookShelfChange={this.onBookShelfChange} />
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
