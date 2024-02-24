import { useState } from "react";
import PropTypes from "prop-types";
import "./TaskInput.scss";

function TaskInput({ value, onChange, maxLength }) {
  const [remainingChars, setRemainingChars] = useState(maxLength);

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
    setRemainingChars(maxLength - newValue.trim().length);
  };

  return (
    <section className="taskInput">
      <label htmlFor="newTask">Nouvelle Tâche :</label>
      <input id="newTask" type="text" value={value} onChange={handleChange} maxLength={maxLength} />
      <p>{remainingChars} caractères restants</p>
    </section>
  );
}

TaskInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default TaskInput;
