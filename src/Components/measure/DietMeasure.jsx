import React from "react";
import styled from "styled-components";

export default function DietMeasure({ onAlert }) {
  return (
    <MeasureModal>
      <MeasureTitle style={{ margin: "20px 0" }}>식사일지 📝</MeasureTitle>
      <MeasureContent>
        <InputWrapper>
          <MealTitle>🍎 아침</MealTitle>
          <Input></Input>
        </InputWrapper>
        <InputWrapper>
          <MealTitle>🥗 점심</MealTitle>
          <Input></Input>
        </InputWrapper>
        <InputWrapper>
          <MealTitle>🍛 저녁</MealTitle>
          <Input></Input>
        </InputWrapper>
        <MeasureBtn
          onClick={() => {
            onAlert();
          }}
        >
          작성 완료
        </MeasureBtn>
      </MeasureContent>
    </MeasureModal>
  );
}

const MeasureModal = styled.div`
  width: 600px;
  height: 400px;
  bottom: 630px;
  border-radius: 10px 10px 0 0;
  background-color: salmon;
  opacity: 0.92;
  z-index: 10;
  position: absolute;
  transition: all 1s;
  border-radius: 10px;
  margin: 0 20px;
  padding: 20px 0;
  margin: 0 -555px;
`;

const MeasureTitle = styled.div`
  font-size: 30px;
  margin: 30px 0 20px 0;
  font-weight: bold;
  color: white;
`;

const Input = styled.input`
  border-radius: 5px;
  border: none;
  padding: 8px;
`;

const InputWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  font-size: 20px;
`;

const MealTitle = styled.div`
  padding: 10px 38px;
  font-size: 20px;
`;

const MeasureBtn = styled.button`
  width: 120px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
  background-color: #972020;
  color: white;
  bottom: 20px;
  left: 240px;
  position: absolute;
`;

const MeasureContent = styled.div``;
