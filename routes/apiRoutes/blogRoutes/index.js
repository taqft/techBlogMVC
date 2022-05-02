const router = require('express').Router();
const { 
    createBlog,
    getAllBlogs,
    getBlogById,
    editBlogView,
    editBlog,
    deleteBlog
 } = require('../../../controllers/blogController');

router.route('/')
    .post(createBlog)
    .get(getAllBlogs)

router.route('/edit/:blogId')
    .get(editBlogView)

router.route('/:blogId')
    .get(getBlogById)
    .put(editBlog)
    .delete(deleteBlog);

module.exports = router;
