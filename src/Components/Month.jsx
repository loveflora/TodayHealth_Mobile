import React from "react";
import styled from "styled-components";
import moment from "moment";
import { useState } from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Month() {
  const today = moment();
  const month = today.month() + 1;

  const [num, setNum] = useState(month);
  const [point, setPoint] = useState(0);

  return (
    <Container>
      <MonthChange>
        <AiOutlineArrowLeft
          style={{ cursor: "pointer" }}
          onClick={() => {
            setNum(num - 1);
          }}
        />
        <div>{num}월</div>
        <AiOutlineArrowRight
          style={{ cursor: "pointer" }}
          onClick={() => {
            setNum(num + 1);
          }}
        />
      </MonthChange>
      {/* 숫자 제한하기 !!!!!!!! */}
      <Content>
        <div style={{ fontSize: "25px", padding: "10px" }}>
          {num}월 총 포인트
        </div>
        <div style={{ fontSize: "60px", padding: "10px" }}>{point}점</div>
        <div style={{ fontSize: "30px", padding: "10px" }}>
          이전 달보다 {point}점 증가했어요 ~ 👏
        </div>
      </Content>
      <List></List>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
`;

const MonthChange = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  gap: 200px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const List = styled.div`
  border: 1px solid #ccc;
  height: 400px;
  width: 700px;
  margin: 30px;
`;
