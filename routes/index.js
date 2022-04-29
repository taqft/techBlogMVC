const router = require('express').Router();
const userRoutes = require('./apiRoutes/userRoutes');
const blogRoutes = require('./apiRoutes/blogRoutes');

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);

module.exports = router;
