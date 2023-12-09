const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey:'user_id',
})

module.exports = { User, Post, Comment };