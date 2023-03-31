import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Main from "./pages/Main";
import Mission from "./pages/Mission";
import Board from "./pages/Board";
import Setting from "./pages/Setting";
import Footer from "./components/common/Footer";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {show && <Background></Background>}
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Board/*" element={<Board />} />
        <Route path="/Setting/*" element={<Setting />}></Route>
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

const Background = styled.div`
  width: 100%;
  z-index: 1;
  opacity: 0.5;
  position: absolute;
  background-color: gray;
  height: 1000px;
  bottom: 160px;

  @media (min-width: 50rem) {
    & {
      bottom: 160px;
    }
  }
`;
