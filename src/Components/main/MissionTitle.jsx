import React from "react";
import styled from "styled-components";
import { IoWatch } from "react-icons/io5";

export default function ContentTitle() {
  return (
    <Container>
      <TodayMission>
        <div> 💌 오늘의 미션입니다</div>
      </TodayMission>
      <div style={{ padding: "10px 0" }}>
        <IoWatch
          className="watchIcon"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ padding: "0 10px" }}>
          <WalkTitle>활동</WalkTitle>
          <WalkContent>0분</WalkContent>
        </div>
        <div
          style={{
            borderLeft: "3px solid #ccc",
            padding: "0 10px",
          }}
        >
          <WalkTitle>걸음수</WalkTitle>
          <WalkContent>0</WalkContent>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  align-items: center;

  @media (min-width: 50rem) {
    & {
      padding: 0 40px;
    }
  }
`;

const TodayMission = styled.div`
  margin-right: auto;
  width: 120px;
  font-size: 12px;

  @media (min-width: 50rem) {
    & {
      width: 220px;
      font-size: 20px;
    }
  }
`;

const WalkTitle = styled.div`
  font-weight: bold;
  font-size: 12px;

  @media (min-width: 50rem) {
    & {
      font-size: 23px;
    }
  }
`;

const WalkContent = styled.div`
  font-size: 12px;
  @media (min-width: 50rem) {
    & {
      font-size: 18px;
    }
  }
`;
