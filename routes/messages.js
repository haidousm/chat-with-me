const router = require("express").Router();
const Message = require("../models/Message");

// POST /api/messages/
// creates message
router.post("/", async (req, res) => {
    try {
        const newMessage = await new Message(req.body);
        const message = await newMessage.save();

        res.status(200).json(message);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

// GET /api/messages/:chatID
// gets messages for chat
router.get("/:chatID", async (req, res) => {
    try {
        const messages = await Message.find({
            chatID: req.params.chatID,
        });

        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;
