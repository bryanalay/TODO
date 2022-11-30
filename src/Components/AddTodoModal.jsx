import { CreateTodoForm } from "./CreateTodoForm";

const AddTodoModal = () => {
  return (
    <div className="bg-slate-600 opacity-80 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-red-200 py-12 px-24 rounded-2xl border-sky-300">
          <CreateTodoForm />
        </div>
      </div>
    </div>
  );
};

export { AddTodoModal };
