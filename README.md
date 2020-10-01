# MyReads Project

The implementation of the final assessment project for Udacity's React Fundamentals course. The project provides a simple book lending app that users can use to search for books and categorize them.

## TL;DR

To get started evaluating the project right away:

* install all project dependencies with `npm install`
* start with `npm start`

## Project Layout
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with the app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app. Contains three bookshelves.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # A component to display book title, author and thumbnail
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── BookShelf.js # A component to represent a book shelf holding a number of books
    ├── BookShelfChanger.js # A helper component to move books between different shelves
    ├── SearchBook.js # A component to search and list found books
    ├── icons # Helpful images for the app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
