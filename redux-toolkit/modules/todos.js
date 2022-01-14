// 액션 정의
const ADD_TODO = "todo/ADD_TODO";
// 액션 생성함수 정의

let nextId = 1;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});
// 초기값
const initialState = [];
// 리듀서 정의
export default function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    default:
      return state;
  }
}
