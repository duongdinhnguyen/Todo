import React, { useState } from "react";
import "./TodoInput.css";
import PropTypes from "prop-types";
TodoInput.propTypes = {
  onAdd: PropTypes.func,
};
TodoInput.defaultProps = {
  onAdd: null,
};
function TodoInput(props) {
  const { onAdd } = props;
  const [state, setstate] = useState("");
  function handleClick(e) {
    setstate(e.target.value);
  }
  function Enter(e) {
    if (e.key === "Enter") {
      if (!onAdd) return;
      onAdd(state);
      setstate("");
    }
  }

  return (
    <div>
      <input
        type="text"
        className="input"
        placeholder="Add events"
        value={state}
        onChange={handleClick}
        onKeyPress={Enter}
      />
    </div>
  );
}
export default TodoInput;
