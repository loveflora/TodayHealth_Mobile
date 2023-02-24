import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";

export default function Header({ text }) {
  return (
    <Navbar>
      <FaHome
        size="30"
        style={{
          //   width: "40px",
          //   height: "40px",
          cursor: "pointer",
          //   padding: "20px",
        }}
      />
      <span style={{ fontSize: "30px", width: "540px", fontWeight: "bold" }}>
        {text}
      </span>
    </Navbar>
  );
}

const Navbar = styled.div`
  width: 700px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 30px;

  .
`;
