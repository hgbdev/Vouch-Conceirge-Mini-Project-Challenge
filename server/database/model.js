const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * Message Model
 */
const messageModel = new Schema({
  roomId: { type: String, required: true },
  username: { type: String, required: true },
  message: { type: String, required: true },
});

/**
 * User Model
 */
const userModel = new Schema({
  username: { type: String, required: true },
  roomId: { type: String, required: true },
  socketId: { type: String },
  isActive: { type: Boolean, required: true },
});

const Message = mongoose.model("Message", messageModel);
const User = mongoose.model("User", userModel);

module.exports = { Message, User };
