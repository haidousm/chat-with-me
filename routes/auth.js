const bcrypt = require("bcrypt");

const router = require("express").Router();
const User = require("../models/User");

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
        console.error(err);
    }
});

module.exports = router;
