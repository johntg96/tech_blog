// user-seeds.js
const { User } = require('../models');

const users = [
  {
    email: 'billyjoel@yahoo.com',
    password: 'helloThisIsFake103',
    about: 'This is a fake user that was made for development purposes. This is the fake about section. Each user has their own about key with data. This data is shown on their profile pages.'
  },
  {
    email: 'whoopdydoopy@woohoo.org',
    password: 'mysteriousHorse95',
    about: 'This is a fake user that was made for development purposes. This is the fake about section. Each user has their own about key with data. This data is shown on their profile pages.'
  },
  {
    email: 'coffeeandbeans@coffee.cup',
    password: 'blackroastedheaven',
    about: 'This is a fake user that was made for development purposes. This is the fake about section. Each user has their own about key with data. This data is shown on their profile pages.'
  },
  {
    email: 'yogirljessica@gmail.com',
    password: 'oranges123',
    about: 'This is a fake user that was made for development purposes. This is the fake about section. Each user has their own about key with data. This data is shown on their profile pages.'
  },
  {
    email: 'hannahmontana@dizzny.gov',
    password: 'dance123',
    about: 'This is a fake user that was made for development purposes. This is the fake about section. Each user has their own about key with data. This data is shown on their profile pages.'
  },
];

const seedUsers = () => User.bulkCreate(users);

module.exports = seedUsers;
