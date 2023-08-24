const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    create_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING(250),
      allowNull: false,
      references: {
        model: 'users',
        key: 'email',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogposts',
  }
);

module.exports = BlogPost;
