import React from "react";
import styled from "styled-components";

export default function Container({ children }) {
  return <Div>{children}</Div>;
}

const Div = styled.div`
  width: 350px;
  height: 270px;
  bottom: 500px;
  margin: 0 -305px;
  background-color: #58c78f;
  border-radius: 10px;
  box-shadow: 5px 5px 5px;
  opacity: 0.92;
  position: absolute;
  z-index: 10;

  @media (min-width: 50rem) {
    & {
      width: 600px;
      height: 400px;
      bottom: 580px;
      margin: 0 -555px;
    }
  }
`;
