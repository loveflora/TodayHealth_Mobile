import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Write({ listCollection, setListCollection }) {
  const navigate = useNavigate();

  //* ----------
  //* 오늘날짜
  //* ----------
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = yyyy + "-" + mm + "-" + dd;

  //* ----------
  //* state
  //* ----------
  const [input, setInput] = useState({
    title: "",
    writer: "",
    created: formattedToday,
    content: "",
    like: false,
    select: "",
  });

  const [file, setFiles] = useState("");

  const writeHandler = () => {
    setListCollection((listCollection) => {
      const copy = [...listCollection];
      return [
        ...copy,
        {
          id: listCollection.length + 1,
          title: input.title,
          writer: input.writer,
          content: input.content,
          created: input.created,
          like: false,
          select: input.select,
        },
      ];
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const initHandler = () => {
    if (window.confirm("초기화하시겠습니까 ?")) {
      alert("초기화되었습니다.");
      setInput((prevState) => ({
        ...prevState,
        title: "",
        writer: "",
        content: "",
        select: "",
      }));
    } else alert("취소되었습니다.");
  };

  const onLoadFile = (e) => {
    const file = e.target.files;
    setFiles(file);
  };
  console.log(file);

  return (
    <Container>
      <H2>등록하기</H2>
      <Header>
        <Info>
          <Select>
            <SubTitle>구분</SubTitle>
            <select
              onChange={onChange}
              name="select"
              value={input.select}
              style={{ width: "120px" }}
            >
              <option value="공지">공지</option>
              <option value="정보">정보</option>
              <option value="이벤트">이벤트</option>
            </select>
          </Select>
          <Created>
            <SubTitle>작성자 : </SubTitle>
            <WriterInput
              name="writer"
              onChange={onChange}
              value={input.writer}
            ></WriterInput>
          </Created>
          <Created> 게시일 : {formattedToday}</Created>
        </Info>
        <Title>
          <Input onChange={onChange} name="title" value={input.title}></Input>
        </Title>
        <div>
          <form className="upload_input">
            <InputImage
              type="file"
              name="image"
              placeholder="첨부파일"
              accept="image/*"
              onchange={onLoadFile}
            ></InputImage>
            <Label for="file">파일 찾기</Label>
            <InputDiv type="file" id="file" name="file" />
          </form>
        </div>
      </Header>
      <Main>
        <Textarea
          onChange={onChange}
          name="content"
          value={input.content}
        ></Textarea>
        <BtnWrapper>
          <BottomBtn
            onClick={() => {
              writeHandler();
              window.alert("작성 완료되었습니다.");
              navigate(`/Board`);
            }}
          >
            작성 완료
          </BottomBtn>
          <BottomBtn
            onClick={initHandler}
            style={{ backgroundColor: "rgb(245, 102, 86)" }}
          >
            초기화
          </BottomBtn>
        </BtnWrapper>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  margin: 0 auto;
  overflow: auto;

  @media (min-width: 50rem) {
    & {
      width: 720px;
      height: 900px;
    }
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const H2 = styled.h2`
  display: flex;
  margin: 10px auto;
  font-weight: bold;
  font-size: 22px;

  @media (min-width: 50rem) {
    & {
      font-size: 28px;
    }
  }
`;

const Title = styled.div`
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;

  @media (min-width: 50rem) {
    & {
      font-size: 20px;
    }
  }
`;

const SubTitle = styled.div`
  padding: 0 10px;
  color: black;
  font-size: 16px;

  @media (min-width: 50rem) {
    & {
      font-size: 20px;
    }
  }
`;

const Input = styled.input`
  width: 350px;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  padding: 8px 18px;
  margin-bottom: 20px;

  @media (min-width: 50rem) {
    & {
      width: 650px;
      margin: 20px 0;
    }
  }
`;

const Select = styled.div`
  display: flex;
`;

const WriterInput = styled.input`
  width: 100px;
  padding: 0 8px;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  border-radius: 5px;

  @media (min-width: 50rem) {
    & {
      width: 120px;
    }
  }
`;

const Created = styled.div`
  color: gray;
  display: flex;
  font-size: 16px;

  @media (min-width: 50rem) {
    & {
      font-size: 19px;
    }
  }
`;

const Info = styled.div`
  display: flex;
  margin: 40px 0 20px 0;
  flex-direction: column;
  margin: 20px;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 50rem) {
    & {
      width: 670px;
      flex-direction: row;
    }
  }
}
`;

const Main = styled.div`
  width: 700px;
`;

const Textarea = styled.textarea`
  font-size: 20px;
  width: 350px;
  height: 280px;
  border: 1px solid #cfcfcf;
  margin: 20px;
  padding: 20px;

  @media (min-width: 50rem) {
    & {
      width: 650px;
      height: 440px;
    }
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 300px;
  justify-content: space-between;

  @media (min-width: 50rem) {
    & {
      width: 600px;
    }
  }
`;

const BottomBtn = styled.button`
  width: 140px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: none;
  background-color: #58c78f;
  border-radius: 5px;
  outline: none;

  @media (min-width: 50rem) {
    & {
      width: 280px;
      height: 50px;
      font-size: 20px;
    }
  }
`;

const InputImage = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 78%;
  color: #999999;
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const Label = styled.label`
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #999999;
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
`;

const InputDiv = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;
