const { User } = require('../models');

const users = [
  {
    email: 'billyjoel@yahoo.com',
    password: 'helloThisIsFake103',
  },
  {
    email: 'whoopdydoopy@woohoo.org',
    password: 'mysteriousHorse95',
  },
  {
    email: 'coffeeandbeans@coffee.cup',
    password: 'blackroastedheaven',
  },
  {
    email: 'yogirljessica@gmail.com',
    password: 'oranges123',
  },
  {
    email: 'hannahmontana@dizzny.gov',
    password: 'dance123',
  },
];

const seedUsers = () => User.bulkCreate(users);

module.exports = seedUsers;
