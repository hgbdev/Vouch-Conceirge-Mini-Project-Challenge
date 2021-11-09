import React, { useState } from "react";
import styled from "styled-components";
import {
  GRAY_2,
  GRAY_3,
  GRAY_INPUT_TEXT,
  GREEN_PRIMARY,
  WHITE,
} from "constants/colors";
import { ReactComponent as IconSend } from "assets/send.svg";

/**
 * @typedef PropTypes
 * @property {Function} onSendMessage
 * @param {PropTypes} props
 * @returns {JSX.Element}
 */
function FormSendMessage(props) {
  const { onSendMessage } = props;

  const [text, setText] = useState("");

  const handeOnSendMessage = (event) => {
    event.preventDefault();
    onSendMessage(text);
    setText("");
  };

  return (
    <FormContainer onSubmit={handeOnSendMessage}>
      <InputMessage
        placeholder="Message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ButtonMessage>
        <IconSend />
      </ButtonMessage>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  border: 1px solid ${GRAY_2};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 16px;
  background-color: ${WHITE};
`;

const InputMessage = styled.input`
  display: flex;
  flex: 1;
  margin: 16px;
  border: none;
  font-size: 16px;
  color: ${GRAY_INPUT_TEXT};

  ::placeholder {
    color: ${GRAY_3};
  }

  :focus {
    outline: none;
  }
`;

const ButtonMessage = styled.button`
  width: 35px;
  height: 35px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  margin: 8px;
  background-color: ${GREEN_PRIMARY};
  color: ${WHITE};
  font-weight: bold;

  :focus {
    outline: 0;
  }
`;

export default FormSendMessage;
