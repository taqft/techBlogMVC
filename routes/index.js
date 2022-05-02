const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const homeRoutes = require('./homeRoutes');
const blogRoutes = require('./apiRoutes/blogRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/blog', blogRoutes);

module.exports = router;
