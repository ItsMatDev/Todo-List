import PropTypes from "prop-types";
import "./TaskInput.scss";

function TaskInput({ value, onChange, maxLength, remainingChars, setRemainingChars }) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
    setRemainingChars(maxLength - newValue.trim().length);
  };

  return (
    <fieldset className="taskInput">
      <label htmlFor="newTask">Nouvelle Tâche :</label>
      <input
        id="newTask"
        type="text"
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder="Entrez votre tâche ici..."
      />
      <p>{remainingChars} caractères restants</p>
    </fieldset>
  );
}

TaskInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
  remainingChars: PropTypes.number.isRequired,
  setRemainingChars: PropTypes.func.isRequired,
};

export default TaskInput;
