import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";

export default function Board() {
  return (
    <div>
      <Header text={"게시판"} />
      <ContainerWrapper>
        <Container>
          <div>Setting</div>
        </Container>
      </ContainerWrapper>
    </div>
  );
}

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 900px;
`;

const Container = styled.div`
  display: flex;
  width: 700px;
  margin: 0 auto;
`;
