const express = require('express');
const router = express.Router();
const BlogPost = require('../../models/BlogPost')

// get route for blog posts
router.get('/blogPosts', async (req, res) => {
  try {
    const blogPosts = await BlogPost.findAll({})
    res.status(200).json(blogPosts);
  } catch {
    res.status(500).json({ message: 'Internal Server Error during GET /blogPosts route.' });
  }
});

router.get('/userBlogPosts', async (req, res) => {
  try {
    const userBlogPosts = await BlogPost.findAll({
      where: { user_email: req.session.user.email }, // filter by user's email
    });

    console.log('User Blog Posts:', userBlogPosts);

    res.status(200).json({ data: userBlogPosts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error during GET /userBlogPosts route.' });
  }
});

router.post('/blogPosts', async (req, res) => {
  try {
    const { title, body } = req.body;

    // To-Do: write the code to store content from client into database.
    console.log(`\nBlog Post Title: ${title}`);
    console.log(`Blog Post Body: ${body}\n`);
    console.log(req.body);
    console.log(req.session);

    const newBlogPost = await BlogPost.create({
      title,
      body,
      create_date: new Date().toISOString(), // You might want to adjust the date format
      user_email: req.session.user.email,
    });

    res.status(201).json({ message: 'Blog Post created successfully', data: newBlogPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error during POST /blogPosts route.'});
  }
});

module.exports = router;