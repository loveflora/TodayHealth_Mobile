import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GoHeart } from "react-icons/go";
import { Route, Routes } from "react-router-dom";
import Edit from "../board/Edit";
export default function Detail({ content, setContent }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const listData = useSelector(({ list }) => list);

  const imgSrc1 = "/Images/" + listData.img1;
  const imgSrc2 = "/Images/" + listData.img2;
  // const imgSrc = "/../../../public/Images/" + state.list.img;

  const toggleHandler = (prevState) => {
    setContent((prevState) => {
      const copy = [...prevState];

      return copy.map((v) => {
        return {
          ...v,
          like: !v.like,
        };
      });
    });
  };

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Container>
            <Title>{content[id - 1].title}</Title>
            <Info>
              <Created> 구분 : 정보 </Created>
              <Created> 게시일 : {content[id - 1].created}</Created>
              <Btn>
                <Like>
                  {content[id - 1].like ? (
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
                </Like>
                <div
                  style={{
                    padding: "0 10px",
                  }}
                >
                  좋아요
                </div>
              </Btn>
            </Info>

            <Main>
              <Img>
                <img src={imgSrc1} style={{ width: "80%" }} />
                <img src={imgSrc2} style={{ width: "80%" }} />
              </Img>
              <Text>{listData.content}</Text>
            </Main>
            <BtnWrapper>
              <BottomBtn
                onClick={() => {
                  navigate(`/Board/detail/${content[id - 1].id}/edit`);
                }}
              >
                수정하기
              </BottomBtn>
              <BottomBtn>삭제하기</BottomBtn>
            </BtnWrapper>
          </Container>
        }
      />
      <Route
        path="/edit"
        element={<Edit content={content} setContent={setContent} />}
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
`;

const Info = styled.div`
  display: flex;
  margin: 20px;
  flexdirection: row;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
`;
const Created = styled.div`
  color: gray;
  display: flex;
  font-size: 20px;
`;

const Like = styled.span`
  display: flex;
`;

const Btn = styled.div`
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
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
  width: 500px;
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
  width: 180px;
  height: 50px;
`;
