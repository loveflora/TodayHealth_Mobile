import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Today from "../Components/Today";
import Week from "../Components/Week";
import Month from "../Components/Month";

import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export default function Mission() {
  let [tab, setTab] = useState(0);

  function TabContent({ tab }) {
    if (tab === 0) {
      return (
        <div>
          <div>{tab}</div>
          <Today />
        </div>
      );
    } else if (tab === 1) {
      return (
        <div>
          <Week />
        </div>
      );
    } else if (tab === 2) {
      return (
        <div>
          <Month />
        </div>
      );
    }
  }

  return (
    <div>
      <Header text={"미션 달성"} />
      <Container>
        <NavWrapper>
          <Nav variant="pills" defaultActiveKey="link-1" className="tabClick">
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                onClick={() => {
                  setTab(0);
                }}
              >
                오늘 달성량
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                onClick={() => {
                  setTab(1);
                }}
              >
                주간 달성량
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-3"
                onClick={() => {
                  setTab(2);
                }}
              >
                월간 달성량
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </NavWrapper>
        <TabContent tab={tab}>완료한 미션</TabContent>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 905px;
`;

const NavWrapper = styled.div`
  padding: 30px;

  .tabClick {
    justify-content: center;
  }

  .nav-link.active {
    background-color: #58c78f;
  }

  .nav-link {
    color: black;
    font-size: 25px;
  }
`;

const TabContent = styled.div`
  height: 800px;
`;
