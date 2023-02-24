import React from "react";
import styled from "styled-components";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { BiWalk } from "react-icons/bi";

export default function Week() {
  return (
    <Container>
      <Calendar />
      {/* 캘린더에서 설정한 날짜 나옴 */}
      <Content>
        <WalkWrapper>
          <div style={{ flexDirection: "row" }}>
            <BiWalk style={{ width: "60px", height: "60px" }} />
            <WalkTitle>활동량</WalkTitle>
          </div>
          <div>평균 걸음수</div>
        </WalkWrapper>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Content = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
`;

const WalkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const WalkTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
