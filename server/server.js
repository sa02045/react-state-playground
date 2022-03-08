const express = require("express");

const app = express();

let todoList = [];
let id = 0;

app.use(express.json());

app.get("/todolist", (req, res) => {
  res.send(todoList);
});

app.get("/todolist/:todoId", (req, res) => {
  const todo = todoList.find((todo) => todo.id === Number(req.params.todoId));
  if (todo) {
    res.status(200);
    res.send(todo);
  } else {
    res.status(400);
    res.send();
  }
});

app.post("/todolist", (req, res) => {
  todoList = [...todoList, { id: id++, ...req.body }];
  res.status(200);
  res.json();
});

app.listen(3000, () => {
  console.log("Server is running");
});
