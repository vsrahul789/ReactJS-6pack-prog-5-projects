import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todo);
  console.log(todos);

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
