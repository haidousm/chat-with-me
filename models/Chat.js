const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
    { participants: { type: Array, required: true } },
    { timestamps: true }
);

module.exports = mongoose.model("Chat", ChatSchema);
