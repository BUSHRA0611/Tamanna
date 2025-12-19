import express from 'express';
import blogs from '../blogData.js';

const router = express.Router();



// Blog list
router.get('/getallblogs', (req, res) => {
  res.status(200).json({ blogs: blogs });
});

// Single blog post
router.get('/getsingleblog/:id', (req, res) => {
  const blog = blogs.find(b => b.id == req.params.id);
  res.status(200).json(blog);

});

export default router;
