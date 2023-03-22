import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Month({ day, month }) {
  const monthlyPoints = [90, 100, 80, 85, 90, 95, 100, 90, 90, 70, 100, 95];
  const score = monthlyPoints[month - 1];

  const [num, setNum] = useState(month);
  const [point, setPoint] = useState(score);

  const [compare, setCompare] = useState("");

  useEffect(() => {
    setPoint(monthlyPoints[num - 1]);

    //? 점수 비교
    // 1) 1월이면 -> 글자 없음
    // 2) 양수이면 -> 증가했어요
    // 3) 음수이면 -> 감소했어요

    let compareScore = monthlyPoints[num - 1] - monthlyPoints[num - 2];

    if (num === 1) {
      setCompare("");
    } else if (compareScore > 0) {
      setCompare("지난 달보다 " + compareScore + "점 높네요 ~ 👏");
    } else if (compareScore === 0) {
      setCompare("지난 달만큼 하셨네요 ! 😉");
    } else if (compareScore < 0) {
      setCompare("지난 달보다 " + -compareScore + "점 낮네요 🥲 ");
    }
  }, [num]);

  const prevMonth = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  const nextMonth = () => {
    num < 12 && setNum(num + 1);
  };

  return (
    <Container>
      <MonthChange>
        <AiOutlineArrowLeft
          style={{ cursor: "pointer" }}
          onClick={() => {
            prevMonth();
          }}
        />
        <div>{num}월</div>
        <AiOutlineArrowRight
          style={{ cursor: "pointer" }}
          onClick={() => {
            nextMonth();
          }}
        />
      </MonthChange>
      <Content>
        <div style={{ fontSize: "25px", fontWeight: "bold" }}>
          {num}월 총 포인트
        </div>
        <div style={{ fontSize: "60px", padding: "10px" }}>{point}점</div>
        <div style={{ fontSize: "28px", padding: "10px" }}>{compare}</div>
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
  background-color: #eee;
  border-radius: 10px;
  margin: 30px;
  width: 500px;
  height: 270px;
`;

const List = styled.div`
  border: 1px solid #ccc;
  height: 350px;
  width: 600px;
  border-radius: 10px;
`;
