import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";

export default function Goals() {
  const [goals, setGoals] = useState([
    { id: 1, title: "목표 걸음수", num: "5000걸음", edit: false },
  ]);

  const [input, setInput] = useState({
    id: goals.length + 1,
    title: "",
    num: "",
    edit: false,
  });

  const onEdit = (idx) => {
    setGoals((prevState) => {
      let copy = [...prevState];
      console.log(copy);
      return copy.map((v, i) => {
        if (i === idx) {
          return {
            ...v,
            edit: !v.edit,
          };
        }
        return v;
      });
    });

    // ---- useRef를 사용하려고 시도했으나, 지워지기만 하고, createElement 안먹음 -----
    // editRef.current.remove();
    // const rootEle = document.getElementById("root");
    // const element = React.createElement("input");
    // ReactDOM.render(element, rootElement);
    // console.log(editRef.current);
  };

  const onDelete = (idx) => {
    setGoals(goals.filter((goal, i) => i !== idx));
  };

  const onAdd = () => {
    if (!input.title) {
      return alert("제목을 입력해주세요");
    }
    if (!input.num) {
      return alert("목표량을 입력해주세요");
    }

    setGoals([...goals, { ...input }]);

    setInput({
      ...input,
      id: goals.length + 2,
      title: "",
      num: "",
    });
  };

  // console.log(goals);
  // console.log(input);
  // console.log(goals.length);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

<<<<<<< HEAD
=======
  const onEditChange = (e) => {
    const { name, value } = e.target;
  };

>>>>>>> origin/master
  return (
    <div>
      <Container>
        <Content>
          {goals.map((v, i) => {
            return (
              <Item key={i}>
                {goals[i].edit ? (
                  <Input
                    onChange={onEditChange}
                    name="title"
                    value={goals[i].title}
                    style={{ margin: "0" }}
                  ></Input>
                ) : (
                  <div style={{ width: "200px" }}>{goals[i].title}</div>
                )}
                {goals[i].edit ? (
                  <Input
                    onChange={onEditChange}
                    name="num"
                    value={goals[i].num}
                    style={{ margin: "0" }}
                  ></Input>
                ) : (
                  <div className="numInput">{goals[i].num}</div>
                )}

                <div style={{ display: "flex" }}>
                  {goals[i].edit ? (
                    <Btn
                      onClick={() => {
                        onEdit(i);
                      }}
                    >
                      완료
                    </Btn>
                  ) : (
                    <Btn
                      onClick={() => {
                        onEdit(i);
                      }}
                    >
                      수정
                    </Btn>
                  )}
                  <Btn
                    style={{ backgroundColor: "#f56656" }}
                    onClick={() => {
                      onDelete(i);
                    }}
                  >
                    삭제
                  </Btn>
                </div>
              </Item>
            );
          })}
        </Content>

        <AddItem>
          <Input
            type="text"
            placeholder="이루고 싶은 목표"
            name="title"
            value={input.title}
            onChange={onChange}
          />
          <Input
            placeholder="목표량"
            name="num"
            value={input.num}
            onChange={onChange}
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
  border-bottom: 1px solid #e8e8e8;
  list-style-type: none;
  padding: 20px;
  text-align: left;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
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
  width: 80px;
  height: 50px;
  background-color: #b7b7b7;
  color: white;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 10px;
`;

const AddItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 20px;
  width: 200px;
  height: 30px;
  margin: 20px;
  border: 1px solid #ccc;
  font-size: 20px;
`;
