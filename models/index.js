const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');

// users have a number of blogs
// as well as a number of comments they have posted
// comments are attached to both the targetBlog and 
User.hasMany(Blog, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'cascade'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',

});

module.exports = {
  Blog,
  User,
  Comment
};
