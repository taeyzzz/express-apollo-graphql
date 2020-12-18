'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, { foreignKey: 'authorId' })
    }
  };
  Post.init({
    title: DataTypes.STRING,
    message: DataTypes.STRING,
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {         // User belongsTo Company 1:1
        model: 'User',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
