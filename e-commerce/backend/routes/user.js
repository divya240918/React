const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// REGISTER
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // check user
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User exists" });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // save user
        const user = new User({
            username,
            password: hashedPassword
        });

        await user.save();

        res.json({ message: "Registered successfully" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

//steps to register
//fetch username and password
//check if user exists, if doesn't
//create hashedPassword
//register the user const user = new User
//save user