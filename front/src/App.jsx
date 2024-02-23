import "./App.scss";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import NewTask from "./components/NewTask/NewTask";
import TasksList from "./components/TasksList/TasksList";

function App() {
  return (
    <>
      <TodoHeader />
      <NewTask />
      <TasksList />
    </>
  );
}

export default App;
