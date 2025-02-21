import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Estudar programação",
      description:
        "Estudar programação para se tornr um desenvolvedor full stack",
      isCompletd: false,
    },
    {
      id: 2,
      text: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente",
      isCompletd: false,
    },
    {
      id: 3,
      text: "Estudar matemática",
      description:
        "Estudar matemática para se tornr um desenvolvedor full stack",
      isCompletd: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}
