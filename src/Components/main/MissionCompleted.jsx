import React from "react";
import styled from "styled-components";

export default function MissionCompleted({ complete }) {
  return (
    <Container>
      <Completed>
        <div>미션 수행 현황</div>
      </Completed>
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

const Container = styled.div``;

const Completed = styled.div`
  font-size: 25px;
  font-weight: bold;
  display: flex;
`;

const CompletedBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #eee;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  margin: 20px 0;
`;

const CompletedBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
