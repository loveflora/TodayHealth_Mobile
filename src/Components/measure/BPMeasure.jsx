import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";

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
    <Container>
      <Title>오늘 나의 혈압은 ?</Title>
      <Content>
        <InputWrapper>
          <SubTitle>수축기</SubTitle>
          <Input onChange={onChange} name="sbp" />
          <Unit>mmHg</Unit>
        </InputWrapper>
        <InputWrapper>
          <SubTitle>이완기</SubTitle>
          <Input onChange={onChange} name="dbp" />
          <Unit>mmHg</Unit>
        </InputWrapper>
      </Content>
      <Btn
        onClick={() => {
          console.log("12");
          if (!input.sbp) {
            alert("수축기 혈압을 입력해주세요.");
          } else if (!input.dbp) {
            alert("이완기 혈압을 입력해주세요.");
          } else onAlert();
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
      margin: 50px 0 40px 0;
    }
  }
`;

const Content = styled.div``;

const Input = styled.input`
  border-radius: 5px;
  border: none;
  padding: 8px;
  width: 100px;

  @media (min-width: 50rem) {
    & {
      width: 150px;
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

  @media (min-width: 50rem) {
    & {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;

  @media (min-width: 50rem) {
    & {
      font-size: 20px;
    }
  }
`;

const Unit = styled.div`
  padding: 10px;
  fontsize: 14px;

  @media (min-width: 50rem) {
    & {
      font-size: 20px;
    }
  }
`;

const Btn = styled.button`
  width: 100px;
  height: 36px;
  padding: 10px;
  margin: 10px;
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
      margin: 30px;
    }
  }
`;
