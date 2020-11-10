import React from "react";
import "./TodoList.css";
import PropTypes from "prop-types";
Todolist.propTypes = {
  todos: PropTypes.array,
  ontodoClick: PropTypes.func,
  checkbox: PropTypes.func,
};
Todolist.defaultProps = {
  todos: [],
  ontodoClick: null,
  checkbox: null,
};

function Todolist(props) {
  const { todos, ontodoClick, checkbox } = props;
  function todoClick(abc) {
    if (ontodoClick) {
      ontodoClick(abc);
    }
  }
  function checkboxClick(todo) {
    if (checkbox) {
      checkbox(todo);
    }
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <div>
            <hr></hr>
            <label className="checkbox">
              <input
                type="checkbox"
                onClick={() => checkboxClick(todo)}
              ></input>
            </label>
            <p className="fas fa-table"> .{todo.date} :</p>
            <input
              className="TodoList"
              type="text"
              value={todo.title}
              onChange={(e) => props.oneditClick(e.target.value, todo.id)}
            ></input>
            <i
              id="nohope"
              className="fas fa-times"
              onClick={() => todoClick(todo)}
            ></i>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Todolist;
