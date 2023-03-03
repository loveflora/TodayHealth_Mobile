import React from "react";
import styled from "styled-components";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { changeData } from "../../Store/data";

export default function Profile() {
  const state = useSelector((state) => state);
  // const dispatch = useDispatch();

  const [birth, setBirth] = useState("");

  const [isBirth, setIsBirth] = useState(true);
  const [message, setMessage] = useState("");

  const validBirth = (e) => {
    const currentBirth = e.target.value;
    setBirth(currentBirth);

    const regBirth =
      /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;

    //? 왜 true가 안되지 ?????
    if (regBirth.test(currentBirth)) {
      setIsBirth(true);
      setMessage("확인되었습니다.");
    } else if (!regBirth.test(currentBirth)) {
      setIsBirth(false);
      setMessage("다시 확인해주세요");
    }

    console.log(birth);
  };

  // 비구조화 할당
  // const { name, gender, age } = inputData;

  //! REDUX dispatch - 수정함수 - 인강듣고 추후 수정 !
  const onChange = (e) => {
    // const { name, value } = e.target;

    const value = e.target.value;

    // console.log(value);
    // console.log(state.user);

    // dispatch(changeData(value));

    // setInputData({
    // ...inputData,
    // [name]: value,
    // });
  };

  // const onEdit = (e) => {
  //   if(e.target.value === "regbirth")
  // }

  return (
    <div>
      <ContainerWrapper>
        <Container>
          <CgProfile size="140" style={{ color: "gray", margin: "30px" }} />
          <H2>수정하기</H2>
          <InputWrapper>
            <Wrapper>
              <Title>이름</Title>
              <Input value={state.user.name} onChange={onChange}></Input>
            </Wrapper>
            <Wrapper style={{ flexDirection: "column" }}>
              {/* 정규식 */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "0 auto",
                }}
              >
                <Title>생년월일</Title>
                <div>
                  <Input
                    name="birth"
                    onChange={validBirth}
                    value={birth}
                  ></Input>
                  <div style={{ flexDirection: "row" }}>{message}</div>
                </div>
              </div>
            </Wrapper>
            <Wrapper style={{ gap: "20px" }}>
              <div style={{ display: "flex", padding: "20px" }}>
                <SelectTitle>남성</SelectTitle>
                <Select
                  type="radio"
                  name="gender"
                  value="남성"
                  checked={state.user.gender}
                  onChange={onChange}
                ></Select>
              </div>
              <div style={{ display: "flex", padding: "20px" }}>
                <SelectTitle>여성</SelectTitle>
                <Select
                  type="radio"
                  name="gender"
                  value="여성"
                  onChange={onChange}
                  checked={state.user.gender}
                ></Select>
              </div>
            </Wrapper>
            <Btn>수정 완료</Btn>
          </InputWrapper>
        </Container>
      </ContainerWrapper>
    </div>
  );
}

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 905px;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const H2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0 40px 0;
`;

const Title = styled.div`
  width: 100px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 20px;
  width: 250px;
  height: 30px;
  margin: 20px;
  border: 1px solid #ccc;
  font-size: 20px;
`;

const Select = styled.input`
  display: flex;
  width: 20px;
`;

const SelectTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  display: flex
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;

const Btn = styled.button`
  width: 150px;
  height: 50px;
  background-color: #58c78f;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  font-size: 20px;
`;
