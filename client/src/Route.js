import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import { END_POINT } from "constants/variables";

const ChatroomComponent = React.lazy(() =>
  import("screens/chatroom/Component")
);
const LoginScreen = React.lazy(() => import("screens/login/Component"));

/**
 * Route Component
 * @returns {JSX.Element}
 */
function RouteComponent() {
  const [socket, setSocket] = useState(null);

  const connectSocket = async () => {
    await setSocket(
      io(`${END_POINT}`, {
        transports: ["websocket", "polling"],
      })
    );
  };

  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route
        path="/chat"
        element={
          <ChatroomComponent connectSocket={connectSocket} socket={socket} />
        }
      />
    </Routes>
  );
}

export default RouteComponent;
