import React, { useEffect } from "react";
import styled from "styled-components";
import { useState, useRef } from "react";

export default function Goals() {
  //? 개별 수정기능은 완료하였으나,
  //? 여러개 다수 수정기능은 미완성
  // 여러개 수정 클릭하면 인식 안됨 => if문...? 활용한 로직을 구현해야 하나...

  const [goals, setGoals] = useState([
    { id: 1, title: "목표 걸음수", num: "5000걸음", edit: false },
  ]);

  const [input, setInput] = useState({
    id: goals.length + 1,
    title: "",
    num: "",
    edit: false,
  });

  // 클릭한 애의 index 받아옴
  const [index, setIndex] = useState(0);
  // state

  const onEdit = (idx) => {
    setIndex(idx);
    setGoals((prevState) => {
      let copy = [...prevState];
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
  };

  // ---- useRef를 사용하려고 시도했으나, 지워지기만 하고, createElement 안먹음 -----
  // editRef.current.remove();
  // const rootEle = document.getElementById("root");
  // const element = React.createElement("input");
  // ReactDOM.render(element, rootElement);
  // console.log(editRef.current);

  const onDelete = (idx) => {
    // setGoals((prevState) => {
    //   [...prevState].filter((v, i) => i !== idx);
    // });
    setGoals([...goals].filter((v, i) => i !== idx));
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

  const [editInput, setEditInput] = useState({
    // 초기값 아래와 같이 세팅하면 '삭제' 버튼 클릭 시, 오류 발생
  });

  useEffect(() => {
    setEditInput({
      id: index + 1,
      title: goals[index].title,
      num: goals[index].num,
      edit: true,
    });
  }, [index]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onEditChange = (e) => {
    const { name, value } = e.target;

    setEditInput({ ...editInput, [name]: value });
    // setEditInput(
    //   let copy = [...editInput]
    //   return copy.map((v,i) => {
    //     if (i === idx) {
    //       return
    //     }
    //     {...editInput, [name]: value });
    //   }

    // input 중에서 id 동일한 애 찾아서
    // 입력 값 받음
    // input 값 변경
    // setInput(
    // let copy = [...input]
    // return copy.map((v,i) => {
    //   if(i === idx) {
    //     return {

    //     }
    //   }
    // })
    // setInput({ [name]: value });
  };

  // setGoals((prevState) => {
  //   let copy = [...prevState];
  //   console.log(copy);
  //   return copy.map((v, i) => {
  //     if (i === idx) {
  //       return {
  //         ...v,
  //         title: "",
  //         num: "",
  //         edit: !v.edit,
  //       };
  //     }
  //     return v;
  //   });
  // });

  //완료 버튼 누르면
  // 해당 id 일치하는 애 찾아서 값 변경해줌
  const onComplete = (idx) => {
    setGoals((prevState) => {
      let copy = [...prevState];
      return copy.map((v, i) => {
        if (i === idx) {
          return {
            ...v,
            title: editInput.title,
            num: editInput.num,
            edit: !v.edit,
          };
        }
        return v;
      });
    });
  };

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
                    value={editInput.title}
                    style={{ margin: "0" }}
                  ></Input>
                ) : (
                  <div>{goals[i].title}</div>
                )}
                {goals[i].edit ? (
                  <Input
                    onChange={onEditChange}
                    name="num"
                    value={editInput.num}
                    style={{ margin: "0" }}
                  ></Input>
                ) : (
                  <div className="numInput">{goals[i].num}</div>
                )}

                <div style={{ display: "flex" }}>
                  {goals[i].edit ? (
                    <Btn
                      onClick={() => {
                        onComplete(i);
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
`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 0 20px 10px 20px;
  width: 420px;
  font-size: 18px;
  text-align: left;
  border-bottom: 1px solid #e8e8e8;
  list-style-type: none;

  @media (min-width: 50rem) {
    & {
      width: 640px;
      font-size: 22px;
      padding: 20px;
    }
  }
`;

const AddItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 420px;

  @media (min-width: 50rem) {
    & {
      width: 640px;
    }
  }
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #b7b7b7;
  border: none;
  border-radius: 5px;

  @media (min-width: 50rem) {
    & {
      font-size: 20px;
      width: 100px;
    }
  }
`;

const Input = styled.input`
  padding: 18px;
  width: 120px;
  height: 30px;
  margin: 10px;
  border: 1px solid #ccc;
  font-size: 16px;

  @media (min-width: 50rem) {
    & {
      width: 200px;
      margin: 20px;
      font-size: 20px;
    }
  }
`;

const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  width: 100px;
  height: 50px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: #58c78f;
  border: none;
  border-radius: 5px;

  @media (min-width: 50rem) {
    & {
      font-size: 20px;
      width: 150px;
    }
  }
`;
