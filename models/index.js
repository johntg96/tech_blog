const BlogPost = require('./BlogPost');
const User = require('./User');

// Relationship between BlogPost and User
BlogPost.belongsTo(User, {
  foreignKey: 'user_email', // This should be the foreign key name in the BlogPost model
  targetKey: 'email', // This should be the target key in the User model
});

module.exports = {
  BlogPost,
  User,
};
