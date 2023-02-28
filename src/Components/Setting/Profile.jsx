import React from "react";
import styled from "styled-components";
import Header from "../Header";

export default function Profile() {
  return (
    <div>
      <ContainerWrapper>
        <Container>sdfsdf</Container>
      </ContainerWrapper>
    </div>
  );
}

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 905px;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 40px;
  width: 700px;
`;
