import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Detail from "../components/board/Detail";
import Write from "../components/board/Write";
import { GoHeart } from "react-icons/go";
import { useState } from "react";
import { useNavigate, Route, Routes, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Board() {
  const navigate = useNavigate();
  let { id } = useParams();
  const listData = useSelector(({ list }) => list);

  const [listCollection, setListCollection] = useState([
    {
      id: 1,
      title: "우수실천자 건강 이벤트가 시작됩니다 !",
      writer: "관리자",
      created: "2022-11-01",
      content:
        "한 해를 마무리하면서 그동안 열심히 해주신 여러분들을 대상으로 이벤트를 진행합니다. 자세한 사항은 위 이미지를 클릭해서 봐주시면 감사하겠습니다^^",
      like: false,
      select: "이벤트",
      img1: "이벤트1.png",
      img2: "이벤트2.png",
    },
  ]);

  //? ----- 구현하고자 하는 기능 --------
  //? 1) id 게시물 순서 ㅠㅠㅠㅠ
  // 게시판 삭제될 때마다, 1 2 3 이렇게 순서가 다시 렌더링 되어야 하지 않나...????
  // id 값을 계속 리렌더링 해줘야 하나 ...?

  //? 2) 전부 다른 페이지 갔다, 다시 들어오면 초기화 되어있는데 ...?
  // localStorage 사용해야 하나...

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
                              <td className="listTitle">
                                {listCollection[i].title}
                              </td>
                              <td>{listCollection[i].writer}</td>
                              <td>{listCollection[i].created}</td>
                              <td className="listLike">
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
  justify-content: center;
  height: 722px;

  @media (min-width: 50rem) {
    & {
      height: 900px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (min-width: 50rem) {
    & {
      width: 700px;
    }
  }
`;

const H2 = styled.h2`
  display: flex;
  margin: 0 auto;
  padding: 20px;
  font-size: 22px;
  font-weight: bold;

  @media (min-width: 50rem) {
    & {
      padding: 40px;
      font-size: 30px;
    }
  }
`;

const Table = styled.div`
  width: 380px;
  height: 600px;
  text-align: center;
  font-size: 14px;

  & > table {
    & > thead {
      background-color: #58c78f;
      color: white;
      border-radius: 5px;

      & > tr > th {
        padding: 5px 10px;
      }
    }

    & > tbody > tr {
      padding: 10px 0;
      cursor: pointer;
      & > td {
        padding: 20px 0;
      }
      .listTitle {
        max-width: 90px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .listLike {
        width: 70px;
      }
    }

    & > tbody > tr:hover {
      background-color: #eee;
    }
  }

  .like {
    cursor: pointer;
    color: ${({ color }) => color};
  }

  @media (min-width: 50rem) {
    & {
      width: 700px;
      font-size: 16px;
      & > table {
        & > thead {
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

          .listTitle {
            max-width: 260px;
          }

          .listLike {
            width: 100px;
          }
        }
      }
    }
  }
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 160px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  background-color: #58c78f;
  color: white;
  border: none;
  border-radius: 5px;

  @media (min-width: 50rem) {
    & {
      width: 280px;
      font-size: 20px;
    }
  }
`;
