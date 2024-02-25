import { useDispatch } from "react-redux";
import "./NewTask.scss";
import { useState } from "react";
import { addTaskAsync } from "../../redux/tasks/thunks";
import TaskInput from "../TaskInput/TaskInput";
import Button from "../Button/Button";

function NewTask() {
  const maxLength = 50;
  const [text, setText] = useState("");
  const [remainingChars, setRemainingChars] = useState(maxLength);

  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    setText(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTaskAsync(text));
    setText("");
    setRemainingChars(maxLength);
  };

  const isButtonDisabled = !text.trim() || text.length > 50;

  return (
    <form className="newTaskForm" onSubmit={handleSubmit}>
      <TaskInput
        value={text}
        onChange={handleChange}
        maxLength={maxLength}
        remainingChars={remainingChars}
        setRemainingChars={setRemainingChars}
      />
      <Button type="submit" disabled={isButtonDisabled} text="Ajouter" />
    </form>
  );
}

export default NewTask;
