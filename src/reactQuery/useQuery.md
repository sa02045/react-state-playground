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
