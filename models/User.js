const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class User extends Model {}

User.init(
    {

});

module.exports = User;