const Blog = require('./Blog');
const User = require('./User');

User.hasMany(Blog, {
    foreignKey: 'userId'
})

module.exports = {
    Blog, 
    User,
}