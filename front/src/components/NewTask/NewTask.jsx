import { useDispatch } from "react-redux";
import "./NewTask.scss";
import { useState } from "react";
import { addTaskAsync } from "../../redux/tasks/thunks";
import TaskInput from "../TaskInput/TaskInput";
import Button from "../Button/Button";

function NewTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    setText(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTaskAsync(text));
    setText("");
  };

  const isButtonDisabled = !text.trim() || text.length > 50;

  return (
    <form className="newTaskForm" onSubmit={handleSubmit}>
      <TaskInput value={text} onChange={handleChange} maxLength={50} />
      <Button type="submit" disabled={isButtonDisabled} onClick={handleSubmit} text="Ajouter" />
    </form>
  );
}

export default NewTask;
