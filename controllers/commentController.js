const { Comment } = require('../models');

module.exports = {
    createComment: async (req, res) => {
        if(!req.session.loggedIn) {
            return res.redirect('/');
        }
        try {
            const newComment = Comment.create({
                ...req.body,
                user_id: req.session.user_id,
            });
            res.status(200).json(newComment);
        } catch (e) {
            res.status(400).json(e);
        }
    }
}