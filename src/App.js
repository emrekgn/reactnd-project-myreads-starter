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

  onBookShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {

      // Try to update existing book
      let found = false
      this.setState(currentState => {
        currentState.books.forEach(b => {
          if (b.id === book.id) {
            found = true
            b.shelf = shelf
          }
          return !found
        })

        return {
          books: currentState.books
        }
      })

      // This is a new book that we need to fetch!
      if (!found) {
        BooksAPI.get(book.id).then((b) => {
          this.setState(currentState => ({
            books: currentState.books.concat(b)
          }))
        })
      }
    })
  };

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks onBookShelfChange={this.onBookShelfChange} />
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
