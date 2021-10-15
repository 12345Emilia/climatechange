const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//REGISTER
router.post('/register', async (req, res) => {
  try {
    //Make password crypted for safety
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    // Info req from the user when reg
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    // Create user and give res to succees or err
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
//LOGIN
router.post('/login', async (req, res) => {
  try {
    //Check if the username exist
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json('Wrong credentials!');
    //Check if the password match the password on rec
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json('Wrong credentials!');

    //Res if the username and password is ok
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
