const router = require('express').Router();
const { 
    createBlog,
    deleteBlog,
 } = require('../../../controllers/blogController');

router.post('/', createBlog);
router.delete('/', deleteBlog);

module.exports = router;