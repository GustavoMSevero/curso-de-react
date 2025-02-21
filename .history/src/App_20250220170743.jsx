import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

export default function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}
