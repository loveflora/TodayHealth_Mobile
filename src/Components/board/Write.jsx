import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

  return (
    <Container>
      <H2>등록하기</H2>
      <Header>
        <Info>
          <Select>
            <div style={{ fontSize: "20px", padding: "0 20px" }}>구분</div>
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
            <div
              style={{ padding: "0 10px", color: "black", fontSize: "19px" }}
            >
              작성자 :{" "}
            </div>
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
  width: 700px;
  height: 800px;
  margin: 40px auto;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const H2 = styled.h2`
  display: flex;
  margin: 0 auto;
  font-weight: bold;
`;

const Title = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 650px;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  padding: 8px 18px;
  margin: 20px 0;
`;

const Select = styled.div`
  display: flex;
`;

const WriterInput = styled.input`
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  width: 120px;
  border-radius: 5px;
  padding: 0 8px;
`;

const Created = styled.div`
  color: gray;
  display: flex;
  font-size: 19px;
`;

const Info = styled.div`
  display: flex;
  margin: 40px 0 20px 0;
  flexdirection: row;
  align-items: center;
  justify-content: space-between;
  width: 670px;
}
`;

const Main = styled.div`
  width: 700px;
`;

const Textarea = styled.textarea`
  font-size: 20px;
  width: 650px;
  height: 500px;
  border: 1px solid #cfcfcf;
  margin: 20px;
  padding: 20px;
`;

const BtnWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 600px;
  justify-content: space-between;
`;

const BottomBtn = styled.button`
  outline: none;
  border: none;
  background-color: #58c78f;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  width: 280px;
  height: 50px;
`;
