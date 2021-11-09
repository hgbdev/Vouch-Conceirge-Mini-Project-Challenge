import React from "react";
import styled from "styled-components";
import { GRAY_1, GREEN_PRIMARY } from "constants/colors";

/**
 * Loading Component
 * @typedef PropTypes
 * @property {Boolean} visible State loading
 * @returns {JSX.Element}
 */
function Loading(props) {
  const { visible } = props;
  if (!visible) return null;
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff80;
`;
export const Spinner = styled.div`
  border: 8px solid ${GRAY_1};
  border-radius: 50%;
  border-top: 8px solid ${GREEN_PRIMARY};
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
`;

export default Loading;
