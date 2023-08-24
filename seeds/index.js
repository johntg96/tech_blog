// index.js
const sequelize = require('../config/connection');

const seedUsers = require('./user-seeds');
const seedBlogPosts = require('./blogPost-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBlogPosts();
  console.log('\n----- BLOG POSTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
