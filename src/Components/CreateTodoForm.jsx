import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const CreateTodoForm = () => {
  const { addTarea, setOpenModal, input, handleOpenModalClose, handleInput } =
    useContext(TodoContext);

  function handleOpenModal() {
    console.log(input);
    setOpenModal(false);
    addTarea(input);
  }

  return (
    <div className="p-3">
      <input
        onChange={(evt) => handleInput(evt)}
        className="rounded-2xl pl-3"
        placeholder="Escribe tu TODO..."
        type="text"
      />
      <div className="flex justify-center gap-16 pt-6">
        <button
          type="submit"
          onClick={handleOpenModal}
          className="bg-sky-300 rounded-2xl text-center px-2 border-x-cyan-400"
        >
          Add
        </button>
        <button
          type="button"
          onClick={handleOpenModalClose}
          className="bg-slate-100 rounded-2xl text-center px-2 border-x-cyan-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export { CreateTodoForm };
