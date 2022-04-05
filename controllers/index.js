const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./homeRoutes');
const { getAllBlogs } = require('../controllers/blogController');

// router.get('/blog', getAllBlogs);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
