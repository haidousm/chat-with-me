const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        first: {
            type: String,
            required: true,
        },
        last: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 4,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
