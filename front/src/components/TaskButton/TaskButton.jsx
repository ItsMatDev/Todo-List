function TaskButton({ disabled, onClick }) {
  return (
    <button type="submit" disabled={disabled} onClick={onClick}>
      Ajouter
    </button>
  );
}

export default TaskButton;
