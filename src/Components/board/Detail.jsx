import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GoHeart } from "react-icons/go";
import { Route, Routes } from "react-router-dom";
import Edit from "../board/Edit";
export default function Detail({ listCollection, setListCollection }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const imgSrc1 = "/Images/" + listCollection[0].img1;
  const imgSrc2 = "/Images/" + listCollection[0].img2;
  // const imgSrc = "/../../../public/Images/" + state.list.img;

  const toggleHandler = () => {
    setListCollection((prevState) => {
      const copy = [...prevState];

      return copy.map((v) => {
        return {
          ...v,
          like: !v.like,
        };
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
            <Title>{listCollection[id - 1].title}</Title>
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
                <img src={imgSrc1} style={{ width: "80%" }} />
                <img src={imgSrc2} style={{ width: "80%" }} />
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
                  navigate(`/Board`);
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
  width: 700px;
  height: 800px;
  margin: 40px auto;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Info = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  flex-direction: column;
  align-items: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  // margin: 20px;
  flex-direction: row;
  justify-content: space-between;
  // padding-bottom: 30px;
  width: 100%;
  height: 60px;
  gap: 40px;
  align-items: center;
`;

const Created = styled.div`
  color: gray;
  display: flex;
  font-size: 20px;
`;

const Btn = styled.div`
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

const Like = styled.span`
  display: flex;
`;

const Main = styled.div`
  width: 700px;
  height: 1200px;
  overflow: auto;
`;

const Img = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
`;

const Text = styled.div`
  font-size: 25px;
  margin: 50px 0;
`;

const BtnWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 600px;
  justify-content: space-between;
  margin-top: 50px;
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
