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
    res.render('bookListView',
      {
        title: 'Library',
        nav: [{ link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }],
        books,
      });
  });

bookRouter.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    res.render(
      'bookView',
      {
        title: 'Library',
        nav: [{ link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }],
        book: books[id],
      },
    );
  });

module.exports = bookRouter;
