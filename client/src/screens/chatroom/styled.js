import Container from "components/Container";
import { GRAY_2, WHITE } from "constants/colors";
import styled from "styled-components";

export const HeaderArea = styled(Container)`
  position: fixed;
  z-index: 9;
  top: 0;
  box-shadow: 0px 2px 5px 0px ${GRAY_2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  background-color: ${WHITE};
`;

export const InputArea = styled(Container)`
  position: fixed;
  z-index: 9;
  bottom: 0;
  width: 100%;
`;

export const ContentArea = styled.div`
  height: calc(100vh - 157px);
  margin-top: 55px;
  margin-bottom: 70px;
  overflow-y: scroll;
  padding: 16px 0;
  width: 100%;

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${GRAY_2};
  }
`;

export const ContainerChatroom = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleChatroom = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

export const ExitLink = styled.a`
  margin-left: 16px;
`;

export const LoadMoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;
