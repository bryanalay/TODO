import { useContext } from "react";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoContext } from "./Context/TodoContext";
import { Modal } from "./Modal/Modal";
import { Footer } from '../src/Components/Footer'

export const Page = () => {
  const {
    error,
    loading,
    eliminarTarea,
    completeTodos,
    searchedTodos,
    openModal,
  } = useContext(TodoContext);
  let a;
  if (searchedTodos.length < 6) a = true;
  else {
    !a;
  }
  return (
    <div
      className={`grid place-items-center p-24 gap-y-4  ${
        a ? "w-screen h-5/6" : "w-screen h-full"
      } bg-green-200 `}
    >
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Cargando...</p>}
        {!error && !searchedTodos.length && <p>Crea tu primer TODO!!</p>}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => eliminarTarea(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && <Modal />}
      <CreateTodoButton />
      
    </div>
  );
};
