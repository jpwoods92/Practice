const express = require('express');

const bookRouter = express.Router();

const books = [
  {
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Lev Nikolayevich Tolstoy',
    read: false,
  },
];
bookRouter.route('/')
  .get((req, res) => {
    res.render('books',
      {
        title: 'Library',
        nav: [{ link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }],
        books,
      });
  });

bookRouter.route('/single')
  .get((req, res) => {
    res.send('hello single book');
  });

module.exports = bookRouter;
