const { Blog } = require('../models');

module.exports = {
    getAllBlogs: async (req, res) => {

        // console.log(req.session);
        
        if (!req.session.loggedIn) {
            return res.redirect('/login');
        }
        try {
            const userBlogData = await Blog.findAll({
                where:{
                    userId: req.session.user.id,
                }
            });

            console.log(userBlogData);

            res.render('blog', {
                userBlogData: userBlogData.map(userBlog => userBlog.get({ plain: true })),
            });
        } catch (e) {
            res.json(e);
        }
    },

    createBlog: async (req, res) => {
        if (!req.session.loggedIn) {
            return res.redirect('/');
            
        }
        try {
            const newBlog = await Blog.create({
                ...req.body,
                user_id: req.session.user_id,
            });
            res.status(200).json(newBlog);
        } catch (e) {
            res.status(400).json(e)
        }
    },

    editBlog: async (req, res) => {
        if(!req.session.loggedIn) {
            return res.redirect('/');
        }
        try {
            const editBlog = await Blog.edit({
                ...req.body,
                user_id: req.session.user_id,
            });
            res.status(200).json(editBlog);
        } catch (e) {
            res.status(400).json(e);
        }
    },

    deleteBlog: async (req, res) => {
        if(!req.session.loggedIn){
            return res.redirect('/');
        }
        try {
            const userBlogData = await Blog.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.status(200).json(userBlogData);
        } catch (e) {
            res.status(400).json(e)
        }
    }
}