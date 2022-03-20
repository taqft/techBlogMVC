const router = require('express').Router();
const { createBlog } = require('../../../controllers/blogController');

router.post('/blog', createBlog);

module.exports = router;