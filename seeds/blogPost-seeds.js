const { BlogPost } = require('../models');

const posts = [
  {
    title: 'Mastering CSS Grid Layout',
    body: "CSS Grid Layout is a powerful tool for creating complex layouts on the web. In this article, we'll explore the fundamentals of CSS Grid and learn how to create responsive and dynamic layouts for modern websites.",
    user_email: "billyjoel@yahoo.com",
    create_date: "01/01/2023"
  },
  {
    title: 'Introduction to JavaScript Frameworks',
    body: 'JavaScript frameworks like React, Vue, and Angular have revolutionized web development. Discover the benefits of using a JavaScript framework, and learn how to get started with building interactive and dynamic web applications.',
    user_email: "whoopdydoopy@woohoo.org",
    create_date: "02/14/2023"
  },
  {
    title: 'Optimizing Website Performance',
    body: "Slow websites can drive users away. In this article, we'll delve into techniques and best practices for optimizing website performance, including image optimization, lazy loading, and minimizing HTTP requests.",
    user_email: "coffeeandbeans@coffee.cup",
    create_date: "05/04/2023"
  }
];

const seedBlogPosts = () => BlogPost.bulkCreate(posts);

module.exports = seedBlogPosts;