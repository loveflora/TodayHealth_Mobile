import React from "react";
import styled from "styled-components";
import { IoWatch } from "react-icons/io5";

export default function ContentTitle() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "spaceBetween",
        }}
      >
        <div
          style={{
            marginRight: "auto",
            fontSize: "20px",
            fontWeight: "bold",
            padding: "30px 80px 20px 40px ",
          }}
        >
          💌 오늘의 미션입니다
        </div>
        <IoWatch
          style={{
            width: "50px",
            height: "50px",
            margin: "auto",
          }}
        />
        <div
          style={{
            display: "flex",
            padding: "10px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRight: "3px solid #ccc",
              padding: "0 10px",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "bold" }}>활동</div>
            <div style={{ fontSize: "18px" }}>0분</div>
          </div>
          <div
            style={{
              borderRight: "2px solid #ccc",
              padding: "0 10px",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "bold" }}>걸음수</div>
            <div style={{ fontSize: "18px", color: "blue" }}>0</div>
          </div>
          <div
            style={{
              borderLeft: "1px solid #ccc",
              padding: "0 10px",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "bold" }}>목표</div>
            <div style={{ fontSize: "18px" }}>5000보</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div``;
