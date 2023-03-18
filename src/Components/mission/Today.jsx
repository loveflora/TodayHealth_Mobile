import React from "react";
import styled from "styled-components";
import { useState } from "react";

import { BiWalk } from "react-icons/bi";
import { IoScaleSharp } from "react-icons/io5";
import { GiWaterDrop } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";

export default function Today({ day, month }) {
  const [data, setData] = useState([
    { walk: 5800, weight: 54, sbp: 130, dbp: 90, bst1: 105, bst2: 179 },
  ]);

  return (
    <Container>
      <Title>
        👏 <br />
        {month}월 {day}일 <br />
        성공한 미션
      </Title>
      <div style={{ fontSize: "20px", paddingBottom: "10px" }}>
        오늘도 멋진 하루를 보내셨네요 !
      </div>
      <Wrapper style={{ backgroundColor: "salmon" }}>
        <Item>
          <BiWalk
            style={{
              display: "flex",
              width: "70px",
              height: "70px",
              marginLeft: "5px",
              color: "white",
            }}
          />
          <Subtitle style={{ paddingLeft: "0px" }}>활동량</Subtitle>
        </Item>
        <Item>
          <Content>오늘 걸음수</Content>
          <Result>{data[0].walk} 보</Result>
        </Item>
      </Wrapper>
      <Wrapper style={{ backgroundColor: "#f2af50" }}>
        <Item>
          <IoScaleSharp
            style={{
              display: "flex",
              width: "70px",
              height: "70px",
            }}
          />
          <Subtitle>체중</Subtitle>
        </Item>
        <Item>
          <Content>오늘 몸무게</Content>
          <Result>{data[0].weight} kg</Result>
        </Item>
      </Wrapper>
      <Wrapper style={{ backgroundColor: "#87cc5c" }}>
        <Item>
          <FaHeartbeat
            style={{
              display: "flex",
              width: "70px",
              height: "70px",
            }}
          />
          <Subtitle>혈압</Subtitle>
        </Item>
        <Item>
          <Content>나의 혈압</Content>
          <Result>
            {data[0].sbp} / {data[0].dbp}{" "}
          </Result>
        </Item>
      </Wrapper>
      <Wrapper style={{ backgroundColor: "#5ccca5" }}>
        <Item>
          <GiWaterDrop
            style={{
              display: "flex",
              width: "70px",
              height: "70px",
            }}
          />
          <Subtitle>혈당</Subtitle>
        </Item>
        <Item
          style={{
            flexDirection: "row",
            paddingTop: "30px",
            gap: "20px",
          }}
        >
          <div style={{ flexDirection: "column" }}>
            <Content>식전</Content>
            <Result>{data[0].bst1}</Result>
          </div>
          <div style={{ flexDirection: "column" }}>
            <Content>식후</Content>
            <Result>{data[0].bst2}</Result>
          </div>
        </Item>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 700px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 50px;
  gap: 50px;
  width: 400px;
  justify-content: space-between;
  margin: 10px 0;
  border-radius: 10px;
  color: white;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Subtitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding: 10px;
`;

const Content = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Result = styled.div`
  font-size: 24px;
`;
