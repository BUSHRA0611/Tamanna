const express = require('express');
const router = express.Router();
const blogs = require('../blogData');

// Home page
router.get('/', (req, res) => {
  res.render('home');
});

// Blog list
router.get('/blog', (req, res) => {
  res.render('blog', { blogs });
});

// Single blog post
router.get('/blog/:id', (req, res) => {
  const blog = blogs.find(b => b.id == req.params.id);
  res.render('post', { blog });
});

module.exports = router;
