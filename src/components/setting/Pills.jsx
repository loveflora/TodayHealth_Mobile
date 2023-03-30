import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Pills() {
  const [pills, setPills] = useState([
    { id: 1, 약명: "혈압약", 용량: 1, 복용횟수: 1 },
  ]);

  const [input, setInput] = useState({
    id: pills.length + 1,
    약명: "",
    용량: "",
    복용횟수: "",
    edit: false,
  });

  // 클릭한 애의 index 받아옴
  const [index, setIndex] = useState(0);

  const onDelete = (idx) => {
    setPills(
      pills.filter((v, i) => {
        return i !== idx;
      })
    );
  };

  const onAdd = () => {
    if (!input.약명) {
      return alert("약명을 입력해주세요");
    }
    if (!input.용량) {
      return alert("용량을 입력해주세요");
    }
    if (!input.복용횟수) {
      return alert("복용횟수를 입력해주세요");
    }

    setPills([...pills, { ...input }]);

    setInput({
      약명: "",
      용량: "",
      복용횟수: "",
    });
  };

  //? 숫자로 변환 ???
  const onChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  return (
    <div>
      <Container>
        <Content>
          <Item>
            <Table>
              <thead>
                <tr>
                  <th>약명</th>
                  <th>용량</th>
                  <th>복용횟수</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {pills.map((v, i) => {
                  return (
                    <tr>
                      <td>
                        <div>{pills[i].약명}</div>
                      </td>
                      <td>
                        <div>{pills[i].용량}</div>
                      </td>
                      <td>
                        <div>{pills[i].복용횟수}</div>
                      </td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "10px",
                          }}
                        >
                          <Btn
                            style={{ backgroundColor: "#f56656" }}
                            onClick={() => onDelete(i)}
                          >
                            삭제
                          </Btn>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Item>
        </Content>

        <AddItem>
          <InputWrapper>
            <Input
              type="text"
              placeholder="약명"
              name="약명"
              onChange={onChange}
              value={input.약명}
            />
            <Input
              type="number"
              min="0"
              placeholder="용량"
              name="용량"
              onChange={onChange}
              value={input.용량}
            />
            <Input
              type="number"
              min="0"
              placeholder="복용횟수"
              name="복용횟수"
              onChange={onChange}
              value={input.복용횟수}
            />
          </InputWrapper>
          <AddBtn onClick={onAdd}>추가하기</AddBtn>
        </AddItem>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 722px;
  margin: 0 auto;
  overflow: auto;

  @media (min-width: 50rem) {
    & {
      width: 720px;
      height: 900px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 540px;

  @media (min-width: 50rem) {
    & {
      height: 650px;
    }
  }
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 360px;
  margin: 50px 0px;
  font-size: 16px;

  @media (min-width: 50rem) {
    & {
      width: 640px;
      font-size: 22px;
      padding: 20px;
    }
  }
`;

const Table = styled.table`
  & > thead > tr > th {
    width: 150px;
    padding: 5px 0px;
    color: white;
    background-color: #58c78f;
  }

  & > tbody > tr > td {
    margin: 30px;
    height: 80px;
  }

  @media (min-width: 50rem) {
    & {
    }
  }
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #b7b7b7;
  border: none;
  border-radius: 5px;

  @media (min-width: 50rem) {
    & {
      width: 100px;
      height: 50px;
      font-size: 20px;
    }
  }
`;

const AddItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const Input = styled.input`
  width: 100px;
  height: 30px;
  margin: 20px 12px;
  padding: 16px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (min-width: 50rem) {
    & {
      width: 150px;
      font-size: 20px;
      padding: 20px;
    }
  }
`;

const InputWrapper = styled.div`
  width: 450px;

  @media (min-width: 50rem) {
    & {
      width: 600px;
    }
  }
`;

const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 46px;
  margin: 10px auto;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #58c78f;
  border: none;
  border-radius: 5px;

  @media (min-width: 50rem) {
    & {
      width: 150px;
      height: 50px;
      font-size: 20px;
      margin: 30px auto;
    }
  }
`;
