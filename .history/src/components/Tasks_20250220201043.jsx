export default function Tasks(props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li className="bg-slate-400 text-white p-2 rounded-md">{task.title}</li>
      ))}
    </ul>
  );
}
