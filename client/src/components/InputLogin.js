import React from "react";
import styled from "styled-components";
import { GRAY_1, GRAY_2, GRAY_3, GRAY_INPUT_TEXT } from "constants/colors";
import { MAX_WIDTH } from "constants/variables";

/**
 * InputLogin Component
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>} props
 * @returns {JSX.Element}
 */
function InputLogin(props) {
  const { ...rest } = props;

  return (
    <InputContainer>
      <InputBox {...rest} />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${GRAY_1};
  border: 1px solid ${GRAY_2};
  border-radius: 8px;
  margin-bottom: 16px;
  width: 100%;
  max-width: ${MAX_WIDTH};
  padding: 8px;
`;

const InputBox = styled.input`
  color: ${GRAY_INPUT_TEXT};
  width: 100%;
  margin: 8px;
  font-size: 16px;
  background-color: transparent;
  border: none;

  ::placeholder {
    color: ${GRAY_3};
  }

  :focus {
    outline: none;
  }
`;

export default InputLogin;
