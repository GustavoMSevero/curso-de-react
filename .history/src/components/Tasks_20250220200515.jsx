export default function Tasks(props) {
  console.log(props);
  return <h1>{props.tasks[0].title}</h1>;
}
