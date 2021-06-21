const bcrypt = require("bcrypt");

const router = require("express").Router();
const User = require("../models/User");

// POST /api/auth/register
// creates user
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(16);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = await new User({
            first: req.body.first,
            last: req.body.last,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// POST /api/auth/login
// login user
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        });
        !user && res.status(404).json({ message: "User not found." });

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        !validPassword &&
            res.status(400).json({ message: "Wrong email or password" });

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;
