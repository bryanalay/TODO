import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const CreateTodoButton = () => {
  const { setOpenModal,setInput } = useContext(TodoContext)
  function handleOpenButton(){
    setOpenModal(true)
    setInput('')
  }
  return (
    <>
      <button
        className="w-10 h-10 items-center border-none bg-red-300 rounded-full  shadow-xl cursor-pointer hover:bg-red-600 fixed right-5 text-2xl font-bold z-50"
        onClick={handleOpenButton}
      >
        +
      </button>
    </>
  );
};

export { CreateTodoButton };
