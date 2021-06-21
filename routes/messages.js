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

// // GET /api/messages/:chatID
// // gets chats for user
// router.get("/:userID", async (req, res) => {
//     try {
//         const chat = await Chat.find({
//             participants: { $in: [req.params.userID] },
//         });

//         res.status(200).json(chat);
//     } catch (err) {
//         res.status(500).json(err.message);
//     }
// });

module.exports = router;
