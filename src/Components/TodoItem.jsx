const TodoItem = (props) => {
  return (
    <li className="flex justify-between  m-0 rounded-xl list-none p-3 bg-indigo-200 shadow-2xl">
      <span
        onClick={props.onComplete}
        className={`${
          props.completed == true && "text-green-600"
        } cursor-pointer hover:text-green-600 pl-5`}
      >
        ~
      </span>
      <h1 className={`${props.completed == true && "line-through"}`}>
        {props.text}
      </h1>
      <span
        onClick={props.onDelete}
        className={`mr-0 ${
          props.completed == false && "text-red-600 "
        } cursor-pointer hover:text-red-600 pr-5`}
      >
        X
      </span>
    </li>
  );
};

export { TodoItem };
