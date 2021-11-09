import React from "react";
import { GREEN_PRIMARY, WHITE } from "constants/colors";
import { MAX_WIDTH } from "constants/variables";
import styled from "styled-components";

/**
 * Button Component
 * @param {React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>} props
 * @returns {JSX.Element}
 */
function Button(props) {
  const { children, ...rest } = props;
  return <ButtonBox {...rest}>{children}</ButtonBox>;
}

const ButtonBox = styled.button`
  background-color: ${GREEN_PRIMARY};
  padding: 16px;
  font-size: 16px;
  outline: none;
  box-shadow: none;
  border: none;
  color: ${WHITE};
  font-weight: bold;
  border-radius: 100px;
  max-width: ${MAX_WIDTH};
  width: 100%;
  cursor: pointer;

  :focus {
    outline: 0;
  }
`;

export default Button;
