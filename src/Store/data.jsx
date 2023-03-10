import { configureStore, createSlice } from "@reduxjs/toolkit";

//
let user = createSlice({
  name: "user",
  initialState: {
    name: "flora",
    gender: "여성",
    age: 26,
  },
});

let list = createSlice({
  name: "user",
  initialState: {
    id: "1",
    title: "우수실천자 건강 이벤트가 시작됩니다 !",
    writer: "관리자",
    created: "2023-04-01",
    content:
      "한 해를 마무리하면서 그동안 열심히 해주신 여러분들을 대상으로 이벤트를 진행합니다. 자세한 사항은 위 이미지를 클릭해서 봐주시면 감사하겠습니다^^",
    like: false,
    img1: "이벤트1.png",
    img2: "이벤트2.png",
  },
});

//? state 변경하는 법
// reducers: {
//   changeData(state, action) {
//     state.user = action.payload;
//   },
// },

export default configureStore({
  reducer: {
    user: user.reducer,
    list: list.reducer,
  },
});

//? 2) 만든 함수 export해야 함
// export const { changeData } = user.actions;

// const text = "안녕하세요~
// 벌써 11월의 끝을 향해 가고 있습니다.

//  2022년 오늘건강과 함께 즐겁고 건강한 한 해가 되셨나요?
//  한 해를 마무리하면서 그동안 열심히 해주신
//  여러분들을 대상으로 이벤트를 진행합니다.

//  자세한 사항은 위 이미지를 클릭해서 봐주시면 감사하겠습니다^^

//  ○ 당첨자 발표
//  : 2022년 12월 05일(월)

//  ○ 수여 대상
//  : 같은 차수의 대상자들 중 걷기 미션 달성 포인트가 150위 안에 든 대상자

//  ○ 평가 기간
//  : 2022년 1월 1일 ~ 11월 30일

//  ○ 참고 사항
//  모집 차수
//  1차 : 2020. 11. ~ 2021. 02.
//  2차 : 2021. 05. ~ 2021. 07.
//  3차 : 2022년 신규

//  ★★★
//  이번 이벤트는 따로 신청할 것 없이,
//  올 한해동안 참여하신 내역을 활용하여 집계 중입니다.

//  따로 댓글을 남기거나, 사진 올릴 것은 없습니다^^
//  ★★★
//  "
