const router = require('express').Router();
const {
	createUser,
	login,
	signupHandler,
} = require('../../../controllers/userController');

// /api/users

router.route('/')
	.post(createUser);

router.post('/signup', signupHandler);
router.post('/login', login);



module.exports = router;