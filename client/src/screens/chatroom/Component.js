/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OtherMessage from "components/OtherMessage";
import MyMessage from "components/MyMessage";
import FormSendMessage from "components/FromSendMessage";
import Loading, { Spinner } from "components/Loading";
import { getMessages } from "services/request";
import { validateTextField } from "utils/functions";
import {
  ContainerChatroom,
  ContentArea,
  ExitLink,
  HeaderArea,
  InputArea,
  LoadMoreBox,
  TitleChatroom,
} from "./styled";

/**
 * Chatroom Component
 * @typedef PropTypes
 * @property {*} socket Socket.io client
 * @param {PropTypes} props
 * @returns {JSX.Element}
 */
function ChatroomComponent(props) {
  const { socket } = props;

  const [loading, setLoading] = useState(false);
  const [spinnerLoadmore, setSpinnerLoadmore] = useState(false);

  const [currentMessages, setCurrentMessages] = useState([]);
  const [savedMessages, setSavedMessages] = useState([]);
  const [loadmore, setLoadmore] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const refLastMessage = useRef(null);
  const refContentArea = useRef(null);

  const totalMessages = useMemo(
    () => savedMessages.concat(currentMessages),
    [savedMessages, currentMessages]
  );

  /**
   * Join room when navigate to chat
   */
  useEffect(() => {
    if (!location.state) navigate("/");
    else {
      socket.emit("join-room", {
        roomId: location.state.roomId,
        username: location.state.username,
      });

      socket.on("message", (data) => {
        if (location.state.username !== data.username)
          setCurrentMessages((prev) => prev.concat(data));
      });
    }
  }, [location, location.state]);

  /**
   * Get history messages
   */
  useEffect(() => {
    if (location.state?.username && location.state?.roomId) {
      setLoading(true);
      if (loadmore) {
        setSpinnerLoadmore(true);
      }
      getMessages({
        roomId: location.state.roomId,
        skip: currentMessages.length + loadmore * 5,
      })
        .then(async (res) => {
          setLoading(false);
          setSpinnerLoadmore(false);
          await setSavedMessages((prev) => [...res.data.data, ...prev]);
          if (loadmore) {
            refContentArea.current.scrollTop = 10;
          }
        })
        .catch((err) => setLoading(false));
    }
  }, [loadmore]);

  /**
   * Smooth scroll when first load message
   */
  useEffect(() => {
    if (savedMessages.length < 15)
      refLastMessage.current?.scrollIntoView({ behavior: "smooth" });
  }, [savedMessages, loadmore]);

  /**
   * Infinity load more message
   */
  useEffect(() => {
    refContentArea.current?.addEventListener(
      "scroll",
      () => {
        if (refContentArea.current.scrollTop === 0)
          setLoadmore((prev) => prev + 1);
      },
      false
    );
  }, []);

  /**
   * Handle leave room
   */
  const handleLeaveRoom = useCallback(() => {
    socket.emit("leave", { roomId: location.state.roomId });
    navigate("/");
  }, []);

  /**
   * Handle send message
   * @param {String} message
   */
  const handleSendMessage = async (message) => {
    if (!validateTextField(message)) {
      alert("Please enter a message");
    } else {
      socket.emit("message", message);
      await setCurrentMessages((prev) => [
        ...prev,
        { username: location.state.username, message },
      ]);
      refLastMessage.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!location.state) return <Loading visible={true} />;
  return (
    <ContainerChatroom>
      <Loading visible={loading && !loadmore} />
      <HeaderArea>
        <ExitLink href="#" title="" onClick={handleLeaveRoom}>
          Exit
        </ExitLink>
        <TitleChatroom>{location.state.roomId}</TitleChatroom>
      </HeaderArea>

      <ContentArea ref={refContentArea}>
        {spinnerLoadmore && (
          <LoadMoreBox>
            <Spinner style={{ width: 30, height: 30 }} />
          </LoadMoreBox>
        )}
        {totalMessages.map((msg, index) => {
          return location.state.username === msg.username ? (
            <MyMessage key={index} ref={refLastMessage}>
              {msg.message}
            </MyMessage>
          ) : (
            <OtherMessage key={index} username={msg.username}>
              {msg.message}
            </OtherMessage>
          );
        })}
        <div ref={refLastMessage}></div>
      </ContentArea>

      <InputArea>
        <FormSendMessage onSendMessage={handleSendMessage} />
      </InputArea>
    </ContainerChatroom>
  );
}

export default ChatroomComponent;
