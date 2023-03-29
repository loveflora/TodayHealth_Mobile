import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";

export default function DietMeasure({ onAlert }) {
  const [input, setInput] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <Container>
      <Title>식사일지 📝</Title>
      <Content>
        <InputWrapper>
          <SubTitle>🍎 아침</SubTitle>
          <Input onChange={onChange} name="breakfast"></Input>
        </InputWrapper>
        <InputWrapper>
          <SubTitle>🥗 점심</SubTitle>
          <Input onChange={onChange} name="lunch"></Input>
        </InputWrapper>
        <InputWrapper>
          <SubTitle>🍛 저녁</SubTitle>
          <Input onChange={onChange} name="dinner"></Input>
        </InputWrapper>
        <Btn
          onClick={() => {
            if (!input.breakfast) {
              alert("아침식사를 입력해주세요.");
            } else if (!input.lunch) {
              alert("점심식사를 입력해주세요.");
            } else if (!input.dinner) {
              alert("저녁식사를 입력해주세요.");
            } else onAlert();
          }}
        >
          작성 완료
        </Btn>
      </Content>
    </Container>
  );
}

const Title = styled.div`
  font-size: 20px;
  margin: 20px 0 5px 0;
  font-weight: bold;
  color: white;

  @media (min-width: 50rem) {
    & {
      font-size: 30px;
      margin: 40px 0 20px 0;
    }
  }
`;

const InputWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 300px;

  @media (min-width: 50rem) {
    & {
      width: 540px;
    }
  }
`;

const Input = styled.input`
  border-radius: 5px;
  border: none;
  padding: 8px;
  width: 180px;
  height: 32px;

  @media (min-width: 50rem) {
    & {
      width: 300px;
      height: 42px;
    }
  }
`;

const SubTitle = styled.div`
  padding: 0px 20px;
  font-size: 14px;
  font-weight: bold;

  @media (min-width: 50rem) {
    & {
      font-size: 20px;
      padding: 10px 30px;
    }
  }
`;

const Content = styled.div``;

const Btn = styled.button`
  width: 100px;
  height: 36px;
  padding: 10px;
  margin: 8px;
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
      margin: 20px;
    }
  }
`;
