import { useDispatch } from "react-redux";
import "./NewTask.scss";
import { addTaskAsync } from "../../redux";
import { useState } from "react";

function NewTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTaskAsync(text));
    setText("");
  };

  return (
    <form className="newTaskForm" onSubmit={handleSubmit}>
      <label htmlFor="newTask">Nouvelle Tâche :</label>
      <input
        id="newTask"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type="submit" disabled={!text.trim() || text.length > 50}>
        Ajouter
      </button>
    </form>
  );
}

export default NewTask;
