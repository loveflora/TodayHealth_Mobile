import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GoHeart } from "react-icons/go";

export default function Detail({ content, setContent }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const state = useSelector((state) => state);

  const imgSrc1 = "/Images/" + state.list.img1;
  const imgSrc2 = "/Images/" + state.list.img2;
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
    <Container>
      <Title>{state.list.title}</Title>
      <Info>
        <Created> 게시일 : {state.list.created}</Created>
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
        <Text>{state.list.content}</Text>
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
