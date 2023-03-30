import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";

export default function BSTMeasure({ onAlert }) {
  const [input, setInput] = useState({
    meal: "",
    bst: 0,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <Container>
      <Title>오늘 나의 혈당은 ?</Title>
      <Content>
        <SelectWrapper_1>
          <SelectWrapper_2>
            <Select onChange={onChange} type="radio" name="meal" value="식전" />
            <SubTitle>식전</SubTitle>
          </SelectWrapper_2>
          <SelectWrapper_2>
            <Select onChange={onChange} type="radio" name="meal" value="식후" />
            <SubTitle>식후</SubTitle>
          </SelectWrapper_2>
        </SelectWrapper_1>
        <InputWrapper>
          <Input onChange={onChange} name="bst"></Input>
          <Unit>mg/dl</Unit>
        </InputWrapper>
      </Content>
      <Btn
        onClick={() => {
          if (!input.meal) {
            alert("식전/식후 선택해주세요.");
          } else if (!input.bst) {
            alert("혈당을 입력해주세요.");
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
  margin: 30px;
  font-weight: bold;
  color: white;

  @media (min-width: 50rem) {
    & {
      font-size: 30px;
      margin: 50px 0 40px 0;
    }
  }
`;

const Content = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SelectWrapper_1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 20px;
`;

const SelectWrapper_2 = styled.div`
  padding: 10px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const SubTitle = styled.div`
  color: white;
  font-size: 18px;

  @media (min-width: 50rem) {
    & {
      font-size: 22px;
    }
  }
`;

const Select = styled.input`
  margin: 10px;
  width: 18px;
  height: 18px;

  @media (min-width: 50rem) {
    & {
      width: 24px;
      height: 24px;
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
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  height: 40px;

  @media (min-width: 50rem) {
    & {
      margin: 20px 0;
      height: 50px;
      width: 640px;
    }
  }
`;

const Unit = styled.div`
  padding: 10px;
  font-size: 16px;

  @media (min-width: 50rem) {
    & {
      font-size: 24px;
      padding: 10px 20px;
    }
  }
`;

const Btn = styled.button`
  width: 100px;
  height: 36px;
  padding: 10px;
  margin: 25px;
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
      margin: 22px;
    }
  }
`;
