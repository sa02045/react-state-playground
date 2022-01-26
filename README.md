# 리액트 상태관리 연습하기

## Recoil

### RecoilRoot

| recoil을 사용하기위해 루트 컴포넌트에 삽입

### Atom

| `상태`

- 컴포넌트에서 Atom을 읽고, 쓸 수 있음
- Atom의 값을 사용하는 컴포넌트들은 atom을 `구독`한다
- 즉, Atom 값 변화가 있으면 그 Atom을 구독하는 모든 컴포넌트들이 재랜더링 된다
- 아래처럼 값을 설정하는데 atom()의 인자객체의 첫번째는 `key` 두번째는 기본값을 설정한다

```js
import { atom } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});
```

| `useRecoilState()`를 사용해 Atom의 값과 set함수를 받아온다

```js
const [text, setText] = useRecoilState(textState);
```

## Redux

## useContext
