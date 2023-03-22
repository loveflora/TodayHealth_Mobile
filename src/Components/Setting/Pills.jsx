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

  //? 아래 사항 내가 구글링하면서 어찌저찌 했는데 아니였다 ,,,,
  // const onDelete = (idx) => {
  //   console.log(idx);
  //   setPills(pills.filter((v, i) => v.id - 1 !== idx));
  //   console.log(pills);
  // };

  // const onAdd = (e) => {
  //   setPills([...pills, { ...input }]);

  //   setInput({
  //     // 다음 인풋이니까 ! --> id: length+2 로 해줘야 함 !!
  //     id: pills.length + 2,
  //     약명: "",
  //     용량: "",
  //     복용횟수: "",
  //   });

  // };

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
                        <div style={{ fontWeight: "bold" }}>
                          {pills[i].약명}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontWeight: "bold" }}>
                          {pills[i].용량}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontWeight: "bold" }}>
                          {pills[i].복용횟수}
                        </div>
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
          <AddBtn onClick={onAdd}>추가하기</AddBtn>
        </AddItem>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  // list-style-type: none;
  margin: 50px 0px;
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const Table = styled.table`
  width: 700px;

  & > thead > tr > th {
    background-color: #58c78f;
    color: white;
    padding: 5px 0px;
    width: 150px;
  }

  & > tbody > tr > td {
    margin: 30px;
    height: 80px;
  }
`;

const AddBtn = styled.button`
  width: 150px;
  height: 50px;
  background-color: #58c78f;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  font-size: 20px;
`;

const Btn = styled.button`
  width: 100px;
  height: 50px;
  background-color: #b7b7b7;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  // margin: 10px;
`;

const AddItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const Input = styled.input`
  padding: 20px;
  width: 150px;
  height: 30px;
  margin: 20px 14px;
  border: 1px solid #ccc;
  font-size: 20px;
`;
