const router = require('express').Router();
const { 
    renderHomePage, 
    renderLogin, 
    renderSignup, 
    renderProfile, 
} = require('../controllers/viewController');

router.get('/', renderHomePage);
router.get('/login', renderLogin);
router.get('/signup', renderSignup);
router.get('/profile', renderProfile);

module.exports = router;
