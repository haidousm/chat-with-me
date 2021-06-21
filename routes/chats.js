const router = require("express").Router();
const Chat = require("../models/Chat");

// POST /api/chats/
// creates chat
router.post("/", async (req, res) => {
    try {
        const newChat = await new Chat({
            participants: [req.body.fromID, req.body.toID],
        });

        const chat = await newChat.save();

        res.status(200).json(chat);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;
