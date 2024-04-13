const express = require("express");
const router = express.Router();
const controller = require('../controller/authController');
const {sanitizeUserRegister , sanitizeUserLogin} = require('../middleware/sanitization');
const passport = require('passport');
require("../middleware/localStrategy");

router.post('/register' , sanitizeUserRegister() ,(req, res, next) => {
    passport.authenticate('register', (err) => {
      if (err) {
        console.log(err)
        return res.status(500).json({ error : err.message });
      }
    return res.status(200).json({ success: true });
    })(req, res, next);
});

router.post('/login' ,sanitizeUserLogin() , (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      if (!user) {
        return res.status(400).json({ error: info });
      }
      return res.status(200).json({ success: true, user });
  })(req, res, next);
});
router.get('/logout' , controller.logout);

module.exports = router;