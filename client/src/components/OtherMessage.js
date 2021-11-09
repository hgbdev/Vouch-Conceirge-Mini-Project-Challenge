import React from "react";
import styled from "styled-components";
import { BLACK, GRAY_1, GRAY_2 } from "constants/colors";

/**
 * OtherMessage Component
 * @typedef PropTypes
 * @property {string} username Username
 * @param {PropTypes} props
 * @returns {JSX.Element}
 */
function OtherMessage(props) {
  const { username, children } = props;
  return (
    <MessengeContainer>
      <Username>{username}</Username>
      <MessageBox>{children}</MessageBox>
    </MessengeContainer>
  );
}

const Username = styled.span`
  margin-left: 16px;
`;

const MessengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-items: flex-start;
`;

const MessageBox = styled.span`
  height: auto;
  background-color: ${GRAY_1};
  color: ${BLACK};
  padding: 16px;
  position: relative;
  margin-bottom: 16px;
  margin-left: 16px;
  max-width: 60%;
  border-radius: 8px 8px 8px 0px;
  border: 1px solid ${GRAY_2};

  ::before {
    content: " ";
    position: absolute;
    left: -1px;
    bottom: -15px;
    border-top: 15px solid ${GRAY_2};
    border-right: 15px solid transparent;
    border-bottom: none;
  }

  ::after {
    content: " ";
    position: absolute;
    left: 0px;
    bottom: -13px;
    border-top: 15px solid ${GRAY_1};
    border-right: 15px solid transparent;
    border-bottom: none;
  }
`;

export default OtherMessage;
