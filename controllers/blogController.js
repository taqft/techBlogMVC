const {
    Blog,
    User,
    Comment
} = require('../models');

module.exports = {
    getAllBlogs: async (req, res) => {

        if (!req.session.loggedIn) {
            return res.redirect('/login');
        }
        try {
            const userBlogData = await Blog.findAll({
                where: {
                    userId: req.session.user.id,
                },
                include: [{
                    model: User,
                    attributes: ['username'],
                }],
                order: [
                    ["createdAt", "DESC"]
                ]
            });
            const blogs = userBlogData.map(userBlog => userBlog.get({
                plain: true
            }));
            res.render('blog', {
                blogs
            });
        } catch (e) {
            res.json(e);
        }
    },

    createBlog: async (req, res) => {
        // console.log('creating blog');
        const {
            title,
            content
        } = req.body;
        if (!req.session.loggedIn) {
            return res.redirect('/login');

        }
        try {
            const newBlog = await Blog.create({
                title,
                content,
                user_id: req.session.user_id
            });
            // console.log('new blog created');
            res.json({
                newBlog
            });
        } catch (e) {
            res.status(400).json(e)
        }
    },

    editBlog: async (req, res) => {
        if (!req.session.loggedIn) {
            return res.redirect('/');
        }
        const {
            title,
            content
        } = req.body;
        try {
            const editedBlog = await Blog.update({
                title,
                content
            }, {
                where: {
                    id: req.params.blogId
                }
            });
            res.status(200).json(editedBlog);
        } catch (e) {
            res.status(400).json(e);
        }
    },

    deleteBlog: async (req, res) => {
        if (!req.session.loggedIn) {
            return res.redirect('/');
        }
        try {
            const userBlogData = await Blog.destroy({
                where: {
                    id: req.params.blogId,
                },
            });
            res.status(200).json(userBlogData);
        } catch (e) {
            res.status(400).json(e)
        }
    },

    getBlogById: async (req, res) => {

        /* Specifically do not require login for single blog posts and comments*/

        // if (!req.session.loggedIn) {
        //     return res.redirect('/login');
        // }
        try {
            const blogPull = await Blog.findOne({
                where: {
                    id: req.params.blogId,
                },
                attributes: [
                    'id',
                    'content',
                    'title',
                    'createdAt'
                ],
                include: [{
                        model: User,
                        attributes: ['username']
                    },
                    {
                        model: Comment,
                        attributes: ['id', 'text', 'blog_id', 'user_id', 'createdAt'],
                        include: {
                            model: User,
                            attributes: ['username']
                        }
                    }
                ],
            });
            const blog = blogPull.get({
                plain: true
            });
            return res.render('singleblog', {
                blog,
                loggedIn: req.session.loggedIn,
            });
        } catch (e) {
            res.json(e);
        }
    },
    editBlogView: async (req, res) => {
        if (!req.session.loggedIn) {
            return res.redirect('/login');
        }
        try {
            const blogPull = await Blog.findOne({
                where: {
                    id: req.params.blogId
                },
                attributes: [
                    'id',
                    'content',
                    'title',
                    'createdAt'
                ],
                include: [{
                        model: User,
                        attributes: ['username']
                    },
                    {
                        model: Comment,
                        attributes: ['id', 'text', 'blog_id', 'user_id', 'createdAt'],
                        include: {
                            model: User,
                            attributes: ['username']
                        }
                    }
                ]
            });
            const blog = blogPull.get({
                plain: true
            });
            res.render('editBlog', {
                blog,
                loggedIn: req.session.loggedIn
            });
        } catch (e) {
            res.json(e);
        }
    },
}
