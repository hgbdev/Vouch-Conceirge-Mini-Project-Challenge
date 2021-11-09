const mongoose = require("mongoose");

/**
 * Connect MongoDB
 */
const connect = async () => {
  await mongoose.connect(
    `mongodb+srv://HGB:${process.env.DB_PASS}@cluster0.1cag3.mongodb.net/realtime-chat?retryWrites=true&w=majority`
  );
};

module.exports = { connect };
