import { useState, createContext } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  const [todos, saveTodos] = useLocalStorage("ejemplo_v1", []);
  const [searchValue, setSearchValue] = useState(""); //aqui se almacena el contenido de la nota
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const error = false;
  const loading = false;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  function handleOpenModalClose() {
    setOpenModal(false);
  }

  function handleInput(event) {
    return setInput(event.target.value);
  }

  function eliminarTarea(text) {
    const todoIndedx = todos.findIndex((todo) => todo.text == text);
    const newItem = [...todos];
    newItem.splice(todoIndedx, 1);
    saveTodos(newItem);
  }

  function addTarea(text) {
    const newItem = [...todos];
    newItem.push({
      text: text,
      completed: false,
    });
    saveTodos(newItem);
  }

  function completeTodos(text) {
    const todoIndedx = todos.findIndex((todo) => todo.text == text);
    const newItem = [...todos];
    newItem[todoIndedx].completed = true;
    saveTodos(newItem);
  }

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        error,
        loading,
        eliminarTarea,
        completeTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        openModal,
        setOpenModal,
        addTarea,
        input,
        setInput,
        handleOpenModalClose,
        handleInput
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
