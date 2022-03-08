const express = require("express");
const cors = require("cors");
const app = express();

let todoList = [
  { id: 0, text: "Todo1" },
  { id: 1, text: "Todo2" },
  { id: 2, text: "Todo3" },
];

let id = 3;

app.use(express.json());
app.use(cors());

app.get("/todolist", (req, res) => {
  console.log(todoList);
  res.status(200);
  res.json(todoList);
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

app.listen(4000, () => {
  console.log("Server is running");
});
