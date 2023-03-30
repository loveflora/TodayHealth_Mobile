import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";

export default function BWMeasure({ onAlert }) {
  const [input, setInput] = useState({
    bw: 0,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <Container>
      <Title>오늘 나의 체중은 ?</Title>
      <InputWrapper>
        <Input onChange={onChange} name="bw"></Input>
        <Unit>kg</Unit>
      </InputWrapper>
      <Btn
        onClick={() => {
          !input.bw ? alert("체중을 입력해주세요.") : onAlert();
        }}
      >
        작성 완료
      </Btn>
    </Container>
  );
}

const Title = styled.div`
  font-size: 20px;
  margin: 30px 0 10px 0;
  font-weight: bold;
  color: white;

  @media (min-width: 50rem) {
    & {
      font-size: 30px;
      margin: 50px 0;
    }
  }
`;

const Input = styled.input`
  border-radius: 5px;
  border: none;
  padding: 8px;
  width: 100px;

  @media (min-width: 50rem) {
    & {
      width: 150px;
      height: 50px;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  margin: 30px 0;

  @media (min-width: 50rem) {
    & {
      width: 650px;
    }
  }
`;

const Unit = styled.div`
  padding: 10px;
  fontsize: 14px;

  @media (min-width: 50rem) {
    & {
      padding: 10px 20px;
      font-size: 24px;
    }
  }
`;

const Btn = styled.button`
  width: 100px;
  height: 36px;
  padding: 10px;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  background-color: #266444;
  color: white;

  @media (min-width: 50rem) {
    & {
      width: 130px;
      font-size: 18px;
      height: 46px;
      margin: 50px;
    }
  }
`;
