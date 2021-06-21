const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
    {
        chatID: { type: String, required: true },
        userID: { type: String, required: true },
        text: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
