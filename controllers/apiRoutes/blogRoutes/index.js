const router = require('express').Router();
const { 
    createBlog,
    deleteBlog,
    editBlog,
 } = require('../../../controllers/blogController');

router.post('/', createBlog);
router.delete('/:id', deleteBlog);
router.patch('/', editBlog);

module.exports = router;