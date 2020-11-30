import React, { useState } from "react";
import TodoInput from "./Components/TodoInput";
import Todolist from "./Components/Todolist";
import "./App.css";
import Completed from "./Components/Completed";

function App() {
  const [state, setstate] = useState([
    { id: 1, title: "do exercise", date: "15:57:03, 22/8/2020" },
    { id: 2, title: " watch film", date: "11:34:03, 26/8/2020" },
    {
      id: 3,
      title: " watch film",
      date: "11:34:03, 26/8/2020",
    },
  ]);
  const [check, setcheck] = useState([]);

  function TodoClick(todo) {
    const index = state.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newtodoList = [...state];
    newtodoList.splice(index, 1);
    setstate(newtodoList);
  }

  function EditTodo(text, todo) {
    const newTodoList = [...state];
    newTodoList.map((stt) => {
      if (stt.id === todo) {
        stt.title = text;
      }
      // console.log(stt);
    });

    setstate(newTodoList);
  }

  function InputClick(input) {
    const newTodo = {
      id: state.length + 1,
      title: input,
      date: new Date().toLocaleString(),
    };
    const newtodoList = [...state];
    newtodoList.push(newTodo);
    setstate(newtodoList);
  }

  function ClearList() {
    const newtodoList = [];
    setstate(newtodoList);
  }

  function AddCheckBox(todo) {
    const index = state.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newtodoList = [...state];
    newtodoList.splice(index, 1);
    setstate(newtodoList);
    const newTodo = {
      id: check.length + 1,
      title: todo.title,
      date: todo.date,
    };
    const newList = [...check];
    newList.push(newTodo);
    setcheck(newList);
    //console.log(newTodo);
  }

  function Click() {
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "inline";
  }

  function DoubleClick() {
    document.getElementById("close").style.display = "inline";
    document.getElementById("open").style.display = "none";
  }
  return (
    <div>
      <h1 className="hh1"> Todo </h1>
      <div className="button">
        <button onClick={ClearList}> ClearList </button>
        <button onClick={Click}> Completed </button>
        <button onClick={DoubleClick}> Active </button>
      </div>
      <div id="close" className="main">
        <TodoInput onAdd={InputClick} />
        <Todolist
          todos={state}
          checkbox={AddCheckBox}
          oneditClick={EditTodo}
          ontodoClick={TodoClick}
        />
      </div>
      <div id="open" className="completed">  
        <Completed com={check}> </Completed>
      </div>
    </div>
  );
}

export default App;
