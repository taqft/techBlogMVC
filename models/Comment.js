const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    user_id: {
        type: DataTypes.UUID,
        references: {
            model: 'user',
            key: 'id',
        }
    },
    blog_id: {
        type: DataTypes.UUID,
        references: {
            model: 'blog',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    timestamps: true,
    modelName: 'comment',
});

module.exports = Comment;
