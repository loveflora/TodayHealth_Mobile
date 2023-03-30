import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { changeName, changeBirth, changeGender } from "../../store/data";

export default function Profile() {
  const userData = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: userData.name,
    birth: userData.birth,
    gender: userData.gender,
  });

  const [birth, setBirth] = useState("");
  const [isBirth, setIsBirth] = useState(true);
  const [message, setMessage] = useState("");

  const validBirth = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });

    const currentBirth = e.target.value;
    setBirth(currentBirth);

    const regBirth =
      /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if (regBirth.test(currentBirth)) {
      setIsBirth(true);
      setMessage("확인되었습니다.");
      dispatch(changeBirth(value));
    } else if (!regBirth.test(currentBirth)) {
      setIsBirth(false);
      setMessage("예) 20001130 형태로 입력해주세요.");
    }
  };

  const onChangeName = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });

    dispatch(changeName(value));
  };

  const onChangeGender = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    dispatch(changeGender(value));
  };

  return (
    <div>
      <ContainerWrapper>
        <Container>
          <CgProfile className="profileImg" />
          <H2>수정하기</H2>
          <InputWrapper>
            <Wrapper>
              <Title>이름</Title>
              <Input
                value={input.name}
                name="name"
                onChange={onChangeName}
              ></Input>
            </Wrapper>
            <Wrapper style={{ flexDirection: "column" }}>
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
                    value={input.birth}
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
                  checked={input.gender === "남성"}
                  onChange={onChangeGender}
                ></Select>
              </div>
              <div style={{ display: "flex", padding: "20px" }}>
                <SelectTitle>여성</SelectTitle>
                <Select
                  type="radio"
                  name="gender"
                  value="여성"
                  onChange={onChangeGender}
                  checked={input.gender === "여성"}
                ></Select>
              </div>
            </Wrapper>
            <Btn
              onClick={() => {
                alert("회원정보가 수정되었습니다.");
                navigate("/setting");
              }}
            >
              수정 완료
            </Btn>
          </InputWrapper>
        </Container>
      </ContainerWrapper>
    </div>
  );
}

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 722px;
  margin: 0 auto;

  @media (min-width: 50rem) {
    & {
      width: 720px;
      height: 900px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 40px;
  flex-direction: column;
  align-items: center;

  .profileImg {
    width: 120px;
    height: 120px;
    color: gray;
    margin: 20px 0;
  }

  @media (min-width: 50rem) {
    .profileImg {
      width: 160px;
      height: 160px;
      margin: 30px 0;
    }
  }
`;

const H2 = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0;

  @media (min-width: 50rem) {
    & {
      margin: 20px 0 40px 0;
    }
  }
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
  width: 140px;
  height: 30px;
  margin: 20px;
  padding: 20px;
  font-size: 20px;
  border: 1px solid #ccc;

  @media (min-width: 50rem) {
    & {
      width: 250px;
    }
  }
`;

const Select = styled.input`
  display: flex;
  width: 20px;
`;

const SelectTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  display: flex;
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
