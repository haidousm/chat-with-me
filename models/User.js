const mongoose = requrie("mongoose");

const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            require: true,
            min: 3,
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
