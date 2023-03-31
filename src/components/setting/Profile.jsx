import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {
  changeName,
  changeBirth,
  changeGender,
  changeImg,
} from "../../store/data";

export default function Profile() {
  const userData = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const [input, setInput] = useState({
    name: userData.name,
    birth: userData.birth,
    gender: userData.gender,
    img: imgFile,
  });

  const [birth, setBirth] = useState("");
  const [isBirth, setIsBirth] = useState(true);
  const [message, setMessage] = useState("");

  console.log(input);

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };

    dispatch(changeImg(imgFile));
  };

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
          <H2>수정하기</H2>
          {(() => {
            if (userData.img) {
              return <ProfileImg src={userData.img} />;
            } else if (imgFile) {
              return <ProfileImg src={imgFile} />;
            } else return <CgProfile className="profileImg" />;
          })()}
          <Upload>
            <form className="upload_input">
              <Label className="upload-img" htmlFor="uploadImg">
                이미지 변경
              </Label>
              <InputDiv
                className="upload-img-input"
                type="file"
                id="uploadImg"
                accept="image/*"
                onChange={saveImgFile}
                ref={imgRef}
              />
            </form>
          </Upload>
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
                if (!input.name) {
                  alert("성함을 입력해주세요.");
                } else if (!input.birth) {
                  alert("생년월일을 입력해주세요.");
                } else {
                  alert("회원정보가 수정되었습니다.");
                  navigate("/setting");
                }
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

const ProfileImg = styled.img`
  margin: 30px;
  border-radius: 100px;
  width: 120px;
  @media (min-width: 50rem) {
    width: 30%;
  }
`;

const Label = styled.label`
  height: 40px;
  color: #58c78f;
  font-weight: bold;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;

  @media (min-width: 50rem) {
    & {
      height: 50px;
      font-size: 20px;
    }
  }
`;

const Upload = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 30px;
  gap: 30px;

  @media (min-width: 50rem) {
    & {
      gap: 80px;
    }
  }
`;

const InputDiv = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const H2 = styled.h2`
  font-size: 30px;
  font-weight: bold;

  @media (min-width: 50rem) {
    & {
      margin-top: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 50px;
  margin: 10px 0;
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: #58c78f;
  border: none;
  border-radius: 5px;

  @media (min-width: 50rem) {
    & {
      width: 220px;
      font-size: 20px;
      margin: 30px 0;
    }
  }
`;
