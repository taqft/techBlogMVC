const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { renderHomePage, loginView, signupView, } = require('../controllers/userController');
const { getAllBlogs } = require('../controllers/blogController');

router.get('/', renderHomePage);
router.get('/login', loginView);
router.get('/signup', signupView);
router.use('/api', apiRoutes);
router.get('/blog', getAllBlogs);

module.exports = router;
