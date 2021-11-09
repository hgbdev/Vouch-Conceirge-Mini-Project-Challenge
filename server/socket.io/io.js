const io = require("socket.io")();
const { User, Message } = require("../database/model");

io.on("connection", function (socket) {
  console.log("Connented: ", socket.id);

  /**
   * Join room
   */
  socket.on("join-room", async ({ username, roomId }) => {
    const user = await User.findOne({ username, roomId });
    if (!user) {
      User.create({ username, roomId, socketId: socket.id, isActive: true });
    } else {
      User.findOneAndUpdate(
        { username, roomId },
        { socketId: socket.id, isActive: true }
      )
        .then(() => {
          socket.join(roomId);
        })
        .catch((err) => {
          console.log(`Join socket id err: `, err);
        });
    }
  });

  /**
   * Message handle
   */
  socket.on("message", async (message) => {
    const user = await User.findOne({ socketId: socket.id, isActive: true });
    console.log("Messaged: ", user.username, message);

    if (user) {
      Message.create({
        username: user.username,
        roomId: user.roomId,
        message: message,
      })
        .then(() => {
          io.to(user.roomId).emit("message", {
            username: user.username,
            message,
          });
        })
        .catch((err) => {
          console.log(`Create message err: `, err);
        });
    }
  });

  /**
   * Disconnect and leave room
   */
  socket.on("disconnect", () => {
    console.log("Disconnected: ", socket.id);
    User.findOneAndUpdate(
      { socketId: socket.id, isActive: true },
      { isActive: false }
    ).catch((err) => {
      console.log(`Set isActive disconnect socket id err: `, err);
    });
  });

  socket.on("leave", ({ roomId }) => {
    console.log("Leave: ", socket.id);
    socket.leave(roomId);
    User.findOneAndUpdate(
      { socketId: socket.id, isActive: true },
      { isActive: false }
    ).catch((err) => {
      console.log(`Set isActive leave socket id err: `, err);
    });
  });
});

module.exports = { io };
