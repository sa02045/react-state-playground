# Query

`useQuery`

```js
useQuery(uniqueKey, fetch);
```

query는 서버로부터 데이터를 fetch하기 위해 사용됩니다.
fetch라고는 하지만 GET 메소드뿐만 아니라 POST 메서드도 query를 통해 수행됩니다
서버의 데이터를 수정하려면 `mutation`을 사용합니다
useQuery함수는 두가지 인자를 필수적으로 가집니다

1. query를 위한 unique key
2. data를 resolve하거나 error를 throw하는 Promise를 return하는 함수

unique key를 통해 refetching, caching, sharing query를 수행합니다

useQuery의 반환값은 데이터 사용에 필요한 모든 정보들을 담고있습니다

query는 한번에 하나의 상태값을 따릅니다

1. `isLoading` : 쿼리가 데이터를 fetching 중 인 상태입니다
2. `isError` : 쿼리가 에러를 만난 상태입니다
3. `isSuccess` : 쿼리가 성공적으로 수행했고 데이터를 사용할 수 있습니다
4. `isIdle` : 쿼리를 현재사용할 수 없는 상태입니다

다음 프로퍼티 정보들도 있습니다.

- `error` : query가 `error`상태인 경우 에러에 대한 프로퍼티
- `data` : query가 `sucess`상태인 경우 데이터에 접근할 수 있는 프러퍼티

대부분의 쿼리에서

1. isLoading 상태를 체크하고
2. isError 상태를 체크하고
3. 마지막으로 데이터를 받아와 성공적인 상태에 대한 렌더링을 진행합니다

```js
const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList);

if (isLoading) {
  return <span>Loading...</span>;
}

if (isError) {
  return <span>Error: {error.message}</span>;
}
```

위와 같이 boolean 프로퍼티말고 state 프로퍼티로도 사용할 수 있습니다

```js
const { status, data, error } = useQuery("todos", fetchTodoList);

if (status === "loading") {
  return <span>Loading...</span>;
}

if (status === "error") {
  return <span>Error: {error.message}</span>;
}
```

# useTodos Custom Hook 작성하기

useTodos 커스텀훅을 작성해서 불러올 수 있습니다

```js
import { useQuery } from "react-query";

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};

export default function useTodos() {
  return useQuery("todos", getTodos);
}

// TodoList.jsx

const { isLoading, isError, data, error } = useTodos();
```

- 로직을 분리할 수 있어서 코드가 간결해졌습니다

## 쿼리가 변수에 의존하는 경우

Query key는 `문자열` 또는 `배열`을 키로 가집니다
만약 쿼리함수가 변수에 의존하는경우 배열 쿼리 키에 의존하는 변수를 추가합니다

```js
const result = useQuery(["todos", todoId], () => fetchTodoById(todoId));
```

- 쿼리함수 `fetchTodoById`는 변수 todoId에 의존합니다.
- 배열로 이루어진 쿼리 Key에 todoId를 추가합니다

```js
function Todos({ status, page }) {
  const result = useQuery(["todos", { status, page }], fetchTodoList);
}

function fetchTodoList({ queryKey }) {
  const [_key, { status, page }] = queryKey;
  return new Promise();
}
```

## fetch 함수를 사용하는 경우 쿼리 함수의 에러처리

fetch API는 HTTP 통신이 실패했을 경우 에러를 throw하지 않습니다. response 객체에 들어있는
status를 확인해 에러를 throw 해야합니다

```js
useQuery(["todos", todoId], async () => {
  const response = await fetch("/todos/" + todoId);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
});
```

## 병렬 쿼리(Parallel Queries)

동시에 실행하는 쿼리들을 작성해보자
병렬적으로 쿼리를 실행하려면 별다른 노력없이 다음처럼 사용하면 된다

```js
function App () {
   // The following queries will execute in parallel
   const usersQuery = useQuery('users', fetchUsers)
   const teamsQuery = useQuery('teams', fetchTeams)
   const projectsQuery = useQuery('projects', fetchProjects)
   ...
 }
```

## Query Retries

쿼리가 실패하게 되면 reactQuery는 자동으로 정해진 횟수만큼 재요청을 보내게 됩니다.
이때 `retry` 옵션으로 재요청할 횟수를 설정할 수 있습니다.

```js
const result = useQuery(["todos", 1], fetchTodoListPage, {
  retry: 10,
});
```

- `retry:true` : 무한대로 재요청
- `retry:false` : 재요청하지 않음

### Retry Delay

기본적으로 재요청을 보낼 때 딜레이가 있다. `1000ms`부터 시작해서 두배씩 걸린다
`QueryClien` 기본 설정을 바꿔 딜레이를 조절할 수 있다.

```js
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});
```

만약 위의 경우처럼 함수가 아닌 숫자라면 항상 똑같은 딜레이로 재요청을 보내게 된다

```js
const result = useQuery("todos", fetchTodoList, {
  retryDelay: 1000,
});
```
