const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoute = require("./routes/auth");
const chatsRoute = require("./routes/chats");
const messagesRoute = require("./routes/messages");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/chats", chatsRoute);
app.use("/api/messages", messagesRoute);

app.listen(
    process.env.PORT || 3000,
    console.log(`server running @ port ${process.env.PORT || 3000}`)
);
