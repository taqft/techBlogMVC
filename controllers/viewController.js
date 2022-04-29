const { User, Blog } = require("../models");
module.exports = {
  renderHomePage: async (req, res) => {
    try {
      const blogData = await Blog.findAll({
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      });

      const blogs = blogData.map((blog) => blog.get({ plain: true }));
      console.log(blogs);
      res.render("homepage", {
        blogs,
        loggedIn: req.session.loggedIn,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  },

  renderLogin: (req, res) => {
    if (req.session.loggedIn) {
      return res.redirect("/profile");
    }
    res.render("login");
  },

  renderSignup: (req, res) => {
    if (req.session.loggedIn) {
      return res.redirect("/profile");
    }
    res.render("signUp");
  },

  renderProfile: async (req, res) => {
      try {
          const userData = await User.findByPk(req.session.user_id, {
              attributes: { exclude: ['password'] },
              include: [{ model: Blog }],
          });

          console.log(userData);

          if (!userData) {
            return res.redirect('back');
          }
          
          const user = userData.get({ plain: true })

          console.log(user);

          if (user) {
            res.render('profile', {
              ...user,
              loggedIn: req.session.loggedIn,
            });
          } 
      } catch (e) {
          console.log(e);
          res.status(500).json(e)
      }
  },
};
