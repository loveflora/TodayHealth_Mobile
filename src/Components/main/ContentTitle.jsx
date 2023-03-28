import React from "react";
import styled from "styled-components";
import { IoWatch } from "react-icons/io5";

export default function ContentTitle() {
  return (
    <Container>
      <TodayMission>💌 오늘의 미션입니다</TodayMission>
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
  flexdirection: row;
  justifycontent: spaceBetween;
  width: 100%;
  padding: 0 20px;
`;

const TodayMission = styled.div`
  margin-right: auto;
  padding: 10px;
  width: 100px;

  @media (min-width: 50rem) {
    & {
      width: 240px;
      font-size: 20px;
      padding: 20px;
    }
  }
`;

const WalkTitle = styled.div`
  font-weight: bold;

  @media (min-width: 50rem) {
    & {
      font-size: 23px;
    }
  }
`;

const WalkContent = styled.div`
  @media (min-width: 50rem) {
    & {
      font-size: 18px;
    }
  }
`;
