const { Model, DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require("../config");

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "blog",
  }
);

module.exports = Blog;
