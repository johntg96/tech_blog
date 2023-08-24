const express = require('express');
const router = express.Router();
const BlogPost = require('../../models/BlogPost')

// get route for blog posts
router.get('/blogPosts', async (req, res) => {
  try {
    const blogPosts = await BlogPost.findAll({})
    res.status(200).json(blogPosts);
  } catch {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;