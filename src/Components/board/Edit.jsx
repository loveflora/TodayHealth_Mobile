import React from "react";
import styled from "styled-components";

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Edit({ listCollection, setListCollection }) {
  const { id } = useParams();
  const navigate = useNavigate();

  //? -------- 구현하고자 하는 기능 -------------
  // [완료] 1) select 값 가져오기
  //? 2) 이미지 첨부 / 수정

  const [input, setInput] = useState({
    id: id,
    select: listCollection[id - 1].select,
    title: listCollection[id - 1].title,
    content: listCollection[id - 1].content,
    writer: listCollection[id - 1].writer,
    created: listCollection[id - 1].created,
    like: listCollection[id - 1].like,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  // 첫번째 데이터부터 수정해주려면, prevState 활용 !
  const editHandler = () => {
    setListCollection((prevState) => {
      let copy = [...prevState];
      return copy.map((v, i) => {
        if (v.id.toString() === id) {
          return {
            ...v,
            select: input.select,
            title: input.title,
            content: input.content,
          };
        }
        return v;
      });
    });
  };

  return (
    <Container>
      <H2>수정하기</H2>
      <Header>
        <Info>
          <Select>
            <div style={{ fontSize: "20px", padding: "0 20px" }}>구분</div>
            <select
              onChange={onChange}
              name="select"
              style={{ width: "120px" }}
              defaultValue={listCollection[id - 1].select}
            >
              <option value="공지">공지</option>
              <option value="정보">정보</option>
              <option value="이벤트">이벤트</option>
            </select>
          </Select>
          <Created> 게시일 : {listCollection[id - 1].created}</Created>
        </Info>
        <Title>
          <Input
            defaultValue={listCollection[id - 1].title}
            onChange={onChange}
            name="title"
          ></Input>
        </Title>
      </Header>
      <Main>
        <Textarea
          defaultValue={listCollection[id - 1].content}
          onChange={onChange}
          name="content"
        ></Textarea>
        <Btn
          onClick={() => {
            editHandler();
            navigate("/Board");
          }}
        >
          수정 완료
        </Btn>
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

const Created = styled.div`
  color: gray;
  display: flex;
  font-size: 20px;
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

const Btn = styled.button`
  width: 180px;
  height: 50px;
  background-color: #58c78f;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  font-size: 20px;
`;
