import React from "react";
import styled from "styled-components";

export default function MissionCompleted({ complete }) {
  return (
    <Container>
      <Title>
        <Title_1>미션 수행 현황</Title_1>
        <Title_2>아래 박스를 채워주세요 🎁</Title_2>
      </Title>
      <CompletedBoxWrapper>
        {complete[0].fin ? (
          <CompletedBox style={{ backgroundColor: "salmon" }}></CompletedBox>
        ) : (
          <CompletedBox></CompletedBox>
        )}
        {complete[1].fin ? (
          <CompletedBox style={{ backgroundColor: "#f2af50" }}></CompletedBox>
        ) : (
          <CompletedBox></CompletedBox>
        )}
        {complete[2].fin ? (
          <CompletedBox style={{ backgroundColor: " #87cc5c" }}></CompletedBox>
        ) : (
          <CompletedBox></CompletedBox>
        )}
        {complete[3].fin ? (
          <CompletedBox style={{ backgroundColor: "#5ccca5" }}></CompletedBox>
        ) : (
          <CompletedBox></CompletedBox>
        )}
      </CompletedBoxWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 22rem;

  @media (min-width: 50rem) {
    & {
      width: 600px;
    }
  }
`;

const Title = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;

  @media (min-width: 50rem) {
    & {
      font-size: 25px;
    }
  }
`;

const Title_1 = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 10px;

  @media (min-width: 50rem) {
    & {
      font-size: 25px;
    }
  }
`;

const Title_2 = styled.div`
  font-size: 12px;

  @media (min-width: 50rem) {
    & {
      font-size: 20px;
    }
  }
`;

const CompletedBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #eee;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  margin: 20px 0;

  @media (min-width: 50rem) {
    & {
      width: 150px;
      height: 50px;
    }
  }
`;

const CompletedBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
