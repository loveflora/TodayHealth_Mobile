import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Main from "./pages/Main";
import Mission from "./pages/Mission";
import Board from "./pages/Board";
import Setting from "./pages/Setting";
import Footer from "./Components/Footer";

function App() {
  const userData = useSelector(({ user }) => user);

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {show && <Back></Back>}
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Board/*" element={<Board />} />
        <Route path="/Setting/*" element={<Setting user={userData} />}></Route>
      </Routes>
      <FooterWrapper>
        <Footer show={show} setShow={setShow} />
      </FooterWrapper>
    </div>
  );
}

export default App;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #e8e8e8;
  position: relative;
`;

const Back = styled.div`
  width: 100%;
  height: 972px;
  z-index: 1;
  opacity: 0.5;
  position: absolute;
  background-color: gray;

  @media screen and (max-width: 768px) {
      & {
        visibility: hidden;
        // width: 100%;
        // height: 750px;
        // // height: 100%;
        // height: 800px;
        // z-index: 1;
        // opacity: 0.5;
        // position: fixed;
        // background-color: gray;
        // bottom: 200px;
    }
`;
