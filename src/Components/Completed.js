import React from "react";
import "./TodoList.css";
import PropTypes from "prop-types";
Completed.propTypes = {
  com: PropTypes.array,
};
Completed.defaultProps = {
  com: [],
};

function Completed(props) {
  const { com } = props;

  return (
    <div>
      <ul>
        {com.map((todo) => (
          <div>
            <p className="fas fa-table"> .{todo.date} :</p>
            <input
              className="TodoList"
              type="text"
              value={todo.title}
              onChange={(e) => props.oneditClick(e.target.value, todo.id)}
            ></input>
            <hr></hr>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Completed;
