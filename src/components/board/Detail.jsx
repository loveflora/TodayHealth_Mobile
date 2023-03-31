import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { BiArrowBack } from "react-icons/bi";
import { Route, Routes } from "react-router-dom";
import Edit from "./Edit";

export default function Detail({ listCollection, setListCollection }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const imgArr = listCollection[id - 1].img;

  const toggleHandler = () => {
    setListCollection((prevState) => {
      const copy = [...prevState];

      return copy.map((v, i) => {
        if (i === parseInt(id - 1)) {
          return {
            ...v,
            like: !v.like,
          };
        }
        return v;
      });
    });
  };

  const deleteHandler = () => {
    if (window.confirm("삭제하시겠습니까 ?")) {
      alert("삭제되었습니다.");
      // setListCollection((prevState) => {
      //   const nextState = [...prevState].filter((v) => v.id.toString() !== id); // params 는 전부 string
      //   return nextState;
      // });

      setListCollection(listCollection.filter((_, i) => i !== id - 1));
      navigate(`/Board`);
      // setListCollection((prevState) => {
      //   let copy = [...prevState];
      //   return copy.filter((v) => v.id.toString() !== id);
      // });
    } else alert("취소되었습니다.");
  };

  // const findId = () => {
  //   listCollection.map((v, i) => {
  //     if (v.id === id) {
  //       return v;
  //     }
  //   });
  // };

  // let new = {};
  // listCollection.map((v, i) => {
  //   if (v.id === id) {
  //     return v;
  //   }
  // });

  console.log(listCollection);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Container>
            <Header>
              <BiArrowBack
                size="30"
                color="gray"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/board");
                }}
              />
              <Title>{listCollection[id - 1].title}</Title>
            </Header>
            <Info>
              <InfoWrapper>
                <Created> 구분 : {listCollection[id - 1].select} </Created>
                <Created
                  style={{
                    padding: "0 10px",
                  }}
                >
                  작성자 : {listCollection[id - 1].writer}
                </Created>
                <Created>게시일 : {listCollection[id - 1].created}</Created>
              </InfoWrapper>
              <InfoWrapper
                style={{
                  marginBottom: "20px",
                  justifyContent: "flex-end",
                  width: "95%",
                }}
              >
                <Created>
                  <Btn
                    onClick={() => {
                      toggleHandler();
                    }}
                  >
                    <Like>
                      {listCollection[id - 1].like ? (
                        <GoHeart className="like" size="30" color="salmon" />
                      ) : (
                        <GoHeart className="like" size="30" color="#ddd" />
                      )}
                    </Like>
                    <div
                      style={{
                        padding: "0 10px",
                      }}
                    >
                      좋아요
                    </div>
                  </Btn>
                </Created>
              </InfoWrapper>
            </Info>
            <Main>
              <Img>
                <img src={imgArr} style={{ width: "80%" }} />
              </Img>
              <Text>{listCollection[id - 1].content}</Text>
            </Main>
            <BtnWrapper>
              <BottomBtn
                onClick={() => {
                  navigate(`/Board/detail/${listCollection[id - 1].id}/edit`);
                }}
              >
                수정하기
              </BottomBtn>
              <BottomBtn
                onClick={() => {
                  deleteHandler();
                }}
                style={{ backgroundColor: "rgb(245, 102, 86)" }}
              >
                삭제하기
              </BottomBtn>
            </BtnWrapper>
          </Container>
        }
      />
      <Route
        path="/edit"
        element={
          <Edit
            listCollection={listCollection}
            setListCollection={setListCollection}
          />
        }
      ></Route>
    </Routes>
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
  align-items: center;
  margin-bottom: 10px;
  gap: 30px;
  width: 100%;

  @media (min-width: 50rem) {
    & {
      gap: 50px;
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

const Info = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 50rem) {
    & {
      width: 80%;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 420px;
  height: 60px;
  gap: 20px;
  align-items: center;

  @media (min-width: 50rem) {
    & {
      gap: 40px;
      width: 100%;
    }
  }
`;

const Created = styled.div`
  color: gray;
  display: flex;
  font-size: 16px;

  @media (min-width: 50rem) {
    & {
      font-size: 20px;
    }
  }
`;

const Btn = styled.div`
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  @media (min-width: 50rem) {
    & {
      width: 150px;
    }
  }
`;

const Like = styled.span`
  display: flex;
`;

const Main = styled.div`
  width: 460px;
  height: 400px;
  overflow: auto;

  @media (min-width: 50rem) {
    & {
      width: 700px;
      height: 500px;
    }
  }
`;

const Img = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 18px;
  margin: 30px 0;

  @media (min-width: 50rem) {
    & {
      font-size: 25px;
      margin: 50px 0;
    }
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 360px;
  justify-content: space-between;
  margin-top: 20px;

  @media (min-width: 50rem) {
    & {
      width: 600px;
      margin-top: 50px;
    }
  }
`;

const BottomBtn = styled.button`
  outline: none;
  border: none;
  background-color: #58c78f;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  width: 160px;
  height: 40px;

  @media (min-width: 50rem) {
    width: 280px;
    height: 50px;
    font-size: 20px;
    }
  }
`;
