import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaHome, FaFlag } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";

function App() {
  //* ------------------
  //* State
  //* ------------------

  //* ------------------
  //* Handlers
  //* ------------------
  function Menu({ txt }) {
    return <div>{txt}</div>;
  }

  //* ------------------
  //* Render
  //* ------------------

  return (
    <div className="App">
      <Container></Container>
      <Footer>
        <div>
          <FaHome className="icon" />
          <Menu txt={"홈"} />
        </div>
        <div>
          <FaFlag className="icon" />
          <Menu txt={"미션"} />
        </div>
        <div>
          <BsFillPlusCircleFill className="icon" />
        </div>
        <div>
          <TbMessages className="icon" />
          <Menu txt={"게시판"} />
        </div>
      </Footer>
    </div>
  );
}

export default App;

//* ------------------
//* STYLE
//* ------------------

const Container = styled.div`
  width: 100%;
  height: 900px;
`;

const Footer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .icon {
    width: 50px;
    height: 50px;
    color: #4bad32;
  }
`;

const Menu = styled.div`
  color: #4bad32;
`;
