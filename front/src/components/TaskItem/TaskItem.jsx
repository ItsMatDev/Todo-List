import PropTypes from "prop-types";
import Button from "../Button/Button";

function TaskItem({ task, onComplete }) {
  return (
    <li>
      - {task.text}
      <Button
        type="button"
        disabled={false}
        onClick={() => onComplete(task.id)}
        text="Terminer"
      />
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default TaskItem;
