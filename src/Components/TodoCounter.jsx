import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const TodoCounter = () => {
  const {completedTodos,totalTodos} = useContext(TodoContext)
  return (
    <>
      <h1 className="bg-yellow-100 p-5 rounded-2xl inset-1/2 w-2/6 text-center shadow-2xl">
        Has completado {completedTodos} de {totalTodos} tareas
      </h1>
    </>
  );
};

export { TodoCounter };
