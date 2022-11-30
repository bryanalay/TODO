import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const TodoSearch = () => {
  const {setSearchValue,searchValue} = useContext(TodoContext)

  const onSearchValueChange = (event) =>{
    return(
    setSearchValue(event.target.value))
  }

  return (
    <div className='grid p-5 bg-lime-100 rounded-2xl inset-1/2 w-2/6 shadow-2xl'>
      <input 
      onChange={onSearchValueChange}
      value={searchValue}
      className="rounded-md box-border md:box-content" placeholder="busca todo" />
    </div>
  );
};

export { TodoSearch };
