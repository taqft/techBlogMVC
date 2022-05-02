const { Comment } = require('../models');

module.exports = {
    createComment: async (req, res) => {
        const { text } = req.body;
        if(!req.session.loggedIn) {
            return res.redirect('/');
        } else if (text === '') {
            return res.status(400).json({
                error: 'You must provide a comment.'
            });
        }
        try {
            const newComment = await Comment.create({
                ...req.body,
                user_id: req.session.user_id,
            });
            res.status(200).json(newComment);
        } catch (e) {
            res.status(400).json(e);
        }
    },
    getAllComments: async (req, res) => {
        try {
            const commentData = await Comment.findAll({
                order: [
                    ["createdAt", "DESC"]
                ]
            });
            const comments = commentData.map(comment => comment.get({
                plain: true
            }));
            res.json(comments);
        } catch (e) {
            res.json(e);
        }
    }
};
