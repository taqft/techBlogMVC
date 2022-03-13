const { Blog } = require('../models');

module.exports = {
    getAllBlogs: async (req, res) => {
        if (!req.session.loggedIn) {
            return res.redirect('/login');
        }
        try {
            const userBlogData = await Blog.findAll({
                where:{
                    userId: req.session.user.id,
                }
            });

            res.render('blog', {
                userBlogData: userBlogData.map(userBlog => userBlog.get({ plain: true })),
            });
        } catch (e) {
            res.json(e);
        }
    },
}