import Button from "components/Button";
import Container from "components/Container";
import styled from "styled-components";

export const TitleLogin = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  margin: 32px 0;
  text-align: center;
`;

export const ButtonLogin = styled(Button)`
  margin-top: 50px;
`;

export const ContainerLogin = styled(Container)`
  padding: 0 16px;
`;

export const FormLogin = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
