import React from "react";
import styled from "styled-components";

/**
 * Container Component
 * @typedef PropTypes
 * @param {React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>} props
 * @returns
 */
function Container(props) {
  const { children, ...rest } = props;
  return <ContainerBox {...rest}>{children}</ContainerBox>;
}

const ContainerBox = styled.div`
  max-width: 800px;
  //padding: 0px 8px;
  margin-right: auto;
  margin-left: auto;
`;

export default Container;
