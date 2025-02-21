import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

export default function App() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div>
        <h1 className="text-red-500">Gerenciador de Tarefas</h1>
        <AddTask />
        <Tasks />
      </div>
    </div>
  );
}
