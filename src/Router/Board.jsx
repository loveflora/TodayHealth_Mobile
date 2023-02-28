import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Detail from "../Components/board/Detail";
import Write from "../Components/board/Write";
import { GoHeart } from "react-icons/go";
import { useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";

export default function Board() {
  const navigate = useNavigate();
  const [list, setList] = useState([
    {
      id: "1",
      title: "4월 건강 이벤트가 시작됩니다 !",
      writer: "관리자",
      created: "2023-04-01",
      content: "내용1",
      like: false,
    },
  ]);

  // const data = [
  //   {
  //     id: "1",
  //     title: "4월 건강 이벤트가 시작됩니다 !",
  //     writer: "관리자",
  //     created: "2023-04-01",
  //     content: "내용1",
  //     like: false,
  //   },
  // ];

  const toggleHandler = () => {
    setList((prevState) => {
      const copy = [...prevState];
      return copy.map((v) => {
        return {
          ...v,
          like: !v.like,
        };
      });
    });
  };

  console.log(list[0].like);

  return (
    <div>
      <Header text={"게시판"} />
      <ContainerWrapper>
        <Container>
          <Routes>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/write" element={<Write />}></Route>
          </Routes>
          <H2>🙌 함께 하면 멀리 갈 수 있어요 !</H2>
          <Table>
            <table style={{ width: "100%" }}>
              <thead>
                <tr className="tableRow">
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일자</th>
                  <th>좋아요</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  onClick={() => {
                    navigate(`/Board/detail/${list.id}`);
                  }}
                >
                  <td>{list[0].id}</td>
                  <td
                    style={{
                      maxWidth: "260px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {list[0].title}
                  </td>
                  <td>{list[0].writer}</td>
                  <td>{list[0].created}</td>
                  <td style={{ width: "100px" }}>
                    {list[0].like ? (
                      <GoHeart
                        className="like"
                        size="30"
                        onClick={() => {
                          toggleHandler();
                        }}
                        color="salmon"
                      />
                    ) : (
                      <GoHeart
                        className="like"
                        size="30"
                        onClick={() => {
                          toggleHandler();
                        }}
                        color="#ddd"
                      />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </Table>
          <Btn
            onClick={() => {
              navigate("/Board/write");
            }}
          >
            작성하기
          </Btn>
        </Container>
      </ContainerWrapper>
    </div>
  );
}

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 900px;
`;

const Container = styled.div`
  display: flex;
  width: 700px;
  margin: 0 auto;
  flex-direction: column;
`;

const H2 = styled.h2`
  display: flex;
  margin: 0 auto;
  padding: 40px;
`;

const Table = styled.div`
  height: 600px;
  text-align: center;
  font-size: 20px;

  & > table {
    & > thead {
      background-color: #58c78f;
      color: white;
      border-radius: 5px;
      & > tr > th {
        padding: 10px 20px;
      }
    }

    & > tbody > tr {
      padding: 10px 0;

      & > td {
        padding: 20px 0;
      }
    }

    & > tbody > tr:hover {
      background-color: #eee;
    }
  }

  .like {
    cursor: pointer;
    color: ${(props) => props.color};
  }
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
