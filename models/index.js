const Todo = require('./Todo');
const User = require('./User');

User.hasMany(Todo, {
    foreignKey: 'userId'
})

module.exports = {
    Todo, 
    User,
}