import React from "react";
import styled from "styled-components";

import { FaHome, FaFlag, FaHeartbeat } from "react-icons/fa";
import { IoWatch, IoScaleSharp, IoWater } from "react-icons/io5";
import { ImSpoonKnife } from "react-icons/im";
import { GiWaterDrop } from "react-icons/gi";

export default function Modal({ onMeasure }) {
  return (
    <Container>
      <MeasureTitle>기록하기</MeasureTitle>
      <MeasureWrapper>
        <MeasureBox
          onClick={() => {
            onMeasure(0);
          }}
        >
          <FaHeartbeat size="50" className="measureIcon" />
          <Measure>혈압</Measure>
        </MeasureBox>
        <MeasureBox
          onClick={() => {
            onMeasure(1);
          }}
        >
          <GiWaterDrop size="50" className="measureIcon" />
          <Measure>혈당</Measure>
        </MeasureBox>
        <MeasureBox
          onClick={() => {
            onMeasure(2);
          }}
        >
          <IoScaleSharp size="50" className="measureIcon" />
          <Measure>체중</Measure>
        </MeasureBox>
        <MeasureBox
          onClick={() => {
            onMeasure(3);
          }}
        >
          <ImSpoonKnife size="50" className="measureIcon" />
          <Measure>식사</Measure>
        </MeasureBox>
      </MeasureWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  height: 420px;
  bottom: 120px;
  margin: 0 -550px;
  border-radius: 10px 10px 0 0;
  background-color: white;
  z-index: 2;
  position: absolute;
  animation: slide 1s ease-in-out;

  @keyframes slide {
    from {
      bottom: -320px;
    }
    to {
      bottom: 120px;
    }
  }
`;

const Measure = styled.div`
  font-size: 20px;
  color: white;
  padding: 10px;
`;

const MeasureTitle = styled.div`
  font-size: 30px;
  margin: 30px 0 20px 0;
  font-weight: bold;
`;

const MeasureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 40px;
  gap: 30px;
  height: 300px;
  flex-wrap: wrap;
`;

const MeasureBox = styled.div`
  width: 245px;
  height: 120px;
  background-color: #58c78f;
  padding-top: 10px;
  border-radius: 5px;
  cursor: pointer;

  .measureIcon {
    color: white;
    margin-top: 8px;
  }
`;
