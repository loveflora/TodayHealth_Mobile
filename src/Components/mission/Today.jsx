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
          <BiWalk className="icon" />
          <Subtitle_1 style={{ paddingLeft: "0px" }}>활동량</Subtitle_1>
        </Item>
        <Item>
          <Subtitle_2>오늘 걸음수</Subtitle_2>
          <Result>{data[0].walk} 보</Result>
        </Item>
      </Wrapper>
      <Wrapper style={{ backgroundColor: "#f2af50" }}>
        <Item>
          <IoScaleSharp className="icon" />
          <Subtitle_1>체중</Subtitle_1>
        </Item>
        <Item>
          <Subtitle_2>오늘 몸무게</Subtitle_2>
          <Result>{data[0].weight} kg</Result>
        </Item>
      </Wrapper>
      <Wrapper style={{ backgroundColor: "#87cc5c" }}>
        <Item>
          <FaHeartbeat className="icon" />
          <Subtitle_1>혈압</Subtitle_1>
        </Item>
        <Item>
          <Subtitle_2>나의 혈압</Subtitle_2>
          <Result>
            {data[0].sbp} / {data[0].dbp}{" "}
          </Result>
        </Item>
      </Wrapper>
      <Wrapper style={{ backgroundColor: "#5ccca5" }}>
        <Item>
          <GiWaterDrop className="icon" />
          <Subtitle_1>혈당</Subtitle_1>
        </Item>
        <Item
          style={{
            flexDirection: "row",
            width: "120px",
          }}
        >
          <SubTitleWrapper>
            <Subtitle_2_bst>식전</Subtitle_2_bst>
            <Result_bst>{data[0].bst1}</Result_bst>
          </SubTitleWrapper>
          <SubTitleWrapper>
            <Subtitle_2_bst>식후</Subtitle_2_bst>
            <Result_bst>{data[0].bst2}</Result_bst>
          </SubTitleWrapper>
        </Item>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 700px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  margin: 0 auto;

  @media (min-width: 50rem) {
    & {
      width: 700px;
      height: 760px;
      padding: 20px;
    }
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 40px;
  gap: 30px;
  width: 300px;
  justify-content: space-between;
  margin: 10px 0;
  border-radius: 10px;
  color: white;

  @media (min-width: 50rem) {
    & {
      width: 400px;
      gap: 50px;
      padding: 30px 50px;
    }
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .icon {
    display: flex;
    width: 50px;
    height: 50px;
  }

  @media (min-width: 50rem) {
    .icon {
      width: 70px;
      height: 70px;
    }
  }
`;

const Subtitle_1 = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;

  @media (min-width: 50rem) {
    & {
      font-size: 25px;
    }
  }
`;

const Subtitle_2 = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 120px;

  @media (min-width: 50rem) {
    & {
      font-size: 25px;
      width: 140px;
    }
  }
`;

const Subtitle_2_bst = styled.div`
  font-size: 20px;
  width: 60px;
  font-weight: bold;

  @media (min-width: 50rem) {
    & {
      font-size: 25px;
    }
  }
`;

const Result = styled.div`
  font-size: 20px;

  @media (min-width: 50rem) {
    & {
      font-size: 24px;
    }
  }
`;

const Result_bst = styled.div`
  font-size: 20px;
  width: 60px;

  @media (min-width: 50rem) {
    & {
      font-size: 24px;
    }
  }
`;

const SubTitleWrapper = styled.div`
  flex-direction: column;
  width: 100px;

  @media (min-width: 50rem) {
    & {
    }
  }
`;
