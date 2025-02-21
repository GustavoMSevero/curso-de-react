export default function Tasks(props) {
  return (
    <h1>
      {props.tasks.map((task) => (
        <p>{task.title}</p>
      ))}
    </h1>
  );
}
