const express = require("express");
const { Message, User } = require("../database/model");

const router = express.Router();

/**
 * Login
 */
router.post("/login", async (req, res) => {
  const { username, roomId } = req.body;

  try {
    if (!username || !roomId)
      throw new Error("Please provide complete information");

    const hasUserInRoom = await User.findOne({ roomId, username });

    if (!hasUserInRoom) {
      await User.create({ roomId, username, isActive: true });
      return res.status(200).json({
        success: true,
        msg: "Join room successfully",
      });
    } else if (!hasUserInRoom.isActive) {
      await User.findOneAndUpdate(
        { _id: hasUserInRoom._id },
        { isActive: true }
      );
      return res.status(200).json({
        success: true,
        msg: "Join room successfully",
      });
    }

    throw new Error(
      "Username is already in the room, please choose another name or another room!"
    );
  } catch (err) {
    return res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
});

/**
 * Get message
 */
router.get("/messages", async (req, res) => {
  const { roomId, skip = 0, limit = 10 } = req.query;
  try {
    const messages = await Message.find({ roomId })
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .sort({ _id: -1 });

    return res.status(200).json({
      success: true,
      data: messages.reverse(),
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      msg: err.message,
    });
  }
});

module.exports = router;
