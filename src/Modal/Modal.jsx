import { createPortal } from "react-dom";
import { AddTodoModal } from "../Components/AddTodoModal";

const Modal = () => {
  return createPortal(
    <AddTodoModal/>,
    document.getElementById("modal")
  );
};

export { Modal };
