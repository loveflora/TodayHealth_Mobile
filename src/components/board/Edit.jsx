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
            <SubTitle>구분</SubTitle>
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
            alert("수정완료 되었습니다.");
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
  align-items: center;
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 50rem) {
    & {
    }
  }
`;

const H2 = styled.h2`
  display: flex;
  margin: 10px auto;
  font-weight: bold;
  font-size: 24px;

  @media (min-width: 50rem) {
    & {
      font-size: 30px;
      margin: 0px auto;
    }
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;

  @media (min-width: 50rem) {
    & {
      font-size: 30px;
    }
  }
`;

const SubTitle = styled.div`
  font-size: 16px;
  width: 54px;
  padding: 0 6px;

  @media (min-width: 50rem) {
    & {
      font-size: 20px;
      padding: 0 20px;
      width: 80px;
    }
  }
`;

const Select = styled.div`
  display: flex;
`;

const Created = styled.div`
  color: gray;
  display: flex;
  font-size: 16px;
  width: 200px;

  @media (min-width: 50rem) {
    & {
      font-size: 20px;
      width: 200px;
    }
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  margin: 10px 0;
  gap: 30px;

  @media (min-width: 50rem) {
    & {
      width: 670px;
      margin: 40px 0 20px 0;
      gap: 0px;
    }
  }
`;

const Input = styled.input`
  width: 350px;
  margin: 20px 0;
  padding: 8px 18px;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  font-size: 16px;

  @media (min-width: 50rem) {
    & {
      width: 650px;
      font-size: 20px;
    }
  }
`;

const Main = styled.div`
  width: 700px;
`;

const Textarea = styled.textarea`
  width: 350px;
  height: 360px;
  padding: 20px;
  font-size: 16px;
  border: 1px solid #cfcfcf;

  @media (min-width: 50rem) {
    & {
      width: 650px;
      height: 500px;
      font-size: 20px;
      margin: 20px;
    }
  }
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 180px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #58c78f;

  @media (min-width: 50rem) {
    & {
      font-size: 20px;
      margin: 10px auto;
    }
  }
`;
