const { User, Blog } = require('../models');
module.exports = {
	createUser: async (req, res) => {
		const { username, email, password } = req.body;
		if (!username || !email || !password ) {
			return res.status(400).json({ error: 'You must provide a username, email, and password'});
		}
		try {
			const user = await User.create({
				username,
				email,
				password,
			});
			res.json(user);
		} catch (e) {
			res.json(e);
		}
	},

	login: async (req, res) => {
		// console.log(req.body);
		try {
			//	first find the user with the given email address
			const userData = await User.findOne({where: { email: req.body.email }});
			// const userFound = userData.get({ plain: true });

			// console.log(userData);

			if (!userData) {
				return res.status(401).send({message: 'Invalid credentials!'});
			}

			const validPassword = await userData.checkPassword(req.body.password);

			if (!validPassword) {
			  res
				.status(400)
				.json({ message: 'Incorrect email or password, please try again' });
			  return;
			} else {
				req.session.save(() => {
				req.session.user = userData;
				req.session.user_id = userData.id;
				req.session.loggedIn = true;
				res.redirect('/profile');
			});
			}
		} catch (e) {
			console.log(e);
			res.json(e);
		}
	},

	signupHandler: async (req, res) => {
		const { email, username, password } = req.body;

		try {
			const createdUser = await User.create({
				email,
				username, 
				password,
			});


			req.session.save(() => {
				req.session.loggedIn = true;
				req.session.user = createdUser;
				req.session.user_id = createdUser.id;
				res.redirect('/profile');
			});
		} catch (e) {
			res.json(e);
		}
	},


	logout: (req, res) => {
		req.session.destroy(() => {
			res.send({
				status: true
			});
		});
	},
};