import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLogin from "components/InputLogin";
import Loading from "components/Loading";
import { loginRequest } from "services/request";
import { validateTextField } from "utils/functions";
import { ButtonLogin, ContainerLogin, FormLogin, TitleLogin } from "./styled";

/**
 * SignIn Screen
 * @returns {JSX.Element}
 */
function LoginScreen() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const hanleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const username = data.get("username");
    const roomId = data.get("roomId");

    if (!validateTextField(username) || !validateTextField(roomId)) {
      alert("Please enter full information!");
    } else {
      setLoading(true);

      loginRequest({ username, roomId })
        .then((res) => {
          setLoading(false);
          navigate("/chat", { replace: true, state: { username, roomId } });
        })
        .catch((err) => {
          setLoading(false);
          alert(err.response.data.msg);
        });
    }
  };

  return (
    <ContainerLogin>
      <Loading visible={loading} />
      <FormLogin onSubmit={hanleSubmit}>
        <TitleLogin>Join Chatroom</TitleLogin>

        <InputLogin placeholder="Username" type="text" name="username" />
        <InputLogin placeholder="Room ID" type="text" name="roomId" />

        <ButtonLogin type="submit">JOIN</ButtonLogin>
      </FormLogin>
    </ContainerLogin>
  );
}

export default LoginScreen;
