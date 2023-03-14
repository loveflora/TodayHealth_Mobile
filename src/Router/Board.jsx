import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Detail from "../Components/board/Detail";
import Write from "../Components/board/Write";
import { GoHeart } from "react-icons/go";
import { useState } from "react";
import { useNavigate, Route, Routes, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Board() {
  const navigate = useNavigate();
  let { id } = useParams();
  const listData = useSelector(({ list }) => list);

  const [listCollection, setListCollection] = useState([listData]);

  const toggleHandler = (idx) => {
    //? 이렇게만 쓰면 이전에 있는 첫번째 기본데이터 반영을 못함. (추가된 애들만 변경가능)
    // let copy = [...listCollection];
    // let copy1 = [...copy];
    // copy1[idx].like = !copy1[idx].like;
    // console.log(copy1);
    // setListCollection(copy1);

    setListCollection((prevState) => {
      let copy = [...prevState];
      return copy.map((v) => {
        // console.log(v); // {}
        // console.log(copy); // [{}, {}]
        if (v.id === idx + 1) {
          return {
            ...v,
            like: !v.like,
          };
        }
        return v; // id가 다르다면 원래 {id: 1} 넘겨주세요 --> 안쓰면 undefined 로 return 됨
      });
    });
  };

  return (
    <div>
      <Header text={"게시판"} />
      <ContainerWrapper>
        <Container>
          <Routes>
            <Route
              path="/*"
              element={
                <>
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
                        {listCollection.map((v, i) => {
                          return (
                            <tr
                              onClick={() => {
                                navigate(
                                  `/Board/detail/${listCollection[i].id}`
                                );
                              }}
                            >
                              <td>{listCollection[i].id}</td>
                              <td
                                style={{
                                  maxWidth: "260px",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {listCollection[i].title}
                              </td>
                              <td>{listCollection[i].writer}</td>
                              <td>{listCollection[i].created}</td>
                              <td style={{ width: "100px" }}>
                                {listCollection[i].like ? (
                                  <GoHeart
                                    className="like"
                                    size="30"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleHandler(i);
                                    }}
                                    color="salmon"
                                  />
                                ) : (
                                  <GoHeart
                                    className="like"
                                    size="30"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleHandler(i);
                                    }}
                                    color="#ddd"
                                  />
                                )}
                              </td>
                            </tr>
                          );
                        })}
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
                </>
              }
            ></Route>
            <Route
              path="/detail/:id/*"
              element={
                <Detail
                  listCollection={listCollection}
                  setListCollection={setListCollection}
                />
              }
            ></Route>
            <Route
              path="/write"
              element={
                <Write
                  listCollection={listCollection}
                  setListCollection={setListCollection}
                />
              }
            ></Route>
          </Routes>
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
      cursor: pointer;
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
  width: 280px;
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
