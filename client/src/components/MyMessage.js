import React from "react";
import styled from "styled-components";
import { GREEN_PRIMARY } from "constants/colors";

/**
 * MyMessage Component
 * @param {*} props
 * @returns {JSX.Element}
 */
function MyMessage(props) {
  const { children, ...rest } = props;

  return (
    <MessengeContainer {...rest}>
      <MessageBox>{children}</MessageBox>
    </MessengeContainer>
  );
}

const MessengeContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  width: 100%;
`;

const MessageBox = styled.span`
  height: auto;
  background-color: ${GREEN_PRIMARY};
  color: #fff;
  padding: 16px;
  position: relative;
  margin-right: 16px;
  margin-bottom: 16px;
  max-width: 60%;
  border-radius: 8px 8px 0px 8px;

  ::after {
    content: " ";
    position: absolute;
    right: 0px;
    bottom: -15px;
    border-top: 15px solid ${GREEN_PRIMARY};
    border-left: 15px solid transparent;
    border-bottom: none;
  }
`;

export default MyMessage;
