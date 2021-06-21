const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
    {
        conversationID: { type: String, required: true },
        userID: { type: String, required: true },
        text: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Chat", ChatSchema);
