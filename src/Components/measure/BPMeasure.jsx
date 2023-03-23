import React, { useState } from "react";
import styled from "styled-components";

export default function BPMeasure({ onAlert }) {
  const [input, setInput] = useState({
    sbp: 0,
    dbp: 0,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(name, value);
  };

  return (
    <MeasureModal>
      <MeasureTitle>오늘 나의 혈압은 ?</MeasureTitle>
      <div style={{ padding: "20px" }}>
        <InputWrapper style={{ width: "530px", paddingBottom: "20px" }}>
          <MealTitle>수축기</MealTitle>
          <Input
            onChange={onChange}
            name="sbp"
            style={{ width: "150px" }}
          ></Input>
          <div style={{ padding: "10px 20px", fontSize: "24px" }}>mmHg</div>
        </InputWrapper>
        <InputWrapper style={{ width: "530px" }}>
          <MealTitle>이완기</MealTitle>
          <Input
            onChange={onChange}
            name="dbp"
            style={{ width: "150px" }}
          ></Input>
          <div style={{ padding: "10px 20px", fontSize: "24px" }}>mmHg</div>
        </InputWrapper>
      </div>
      <MeasureBtn
        onClick={() => {
          if (!input.sbp) {
            alert("수축기 혈압을 입력해주세요.");
          } else if (!input.dbp) {
            alert("이완기 혈압을 입력해주세요.");
          } else onAlert();
        }}
      >
        작성 완료
      </MeasureBtn>
    </MeasureModal>
  );
}

const MeasureModal = styled.div`
  width: 600px;
  height: 400px;
  bottom: 580px;
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
  box-shadow: 5px 5px 5px;
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
