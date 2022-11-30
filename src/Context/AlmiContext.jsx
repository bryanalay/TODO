import { createContext, useState } from "react";

const AlmiContext = createContext();

export const AlmiProvider = (props) => {
  const [contador, setContador] = useState(0);

  return (
    <AlmiContext.Provider value={{ contador, setContador }}>
      {props.children}
    </AlmiContext.Provider>
  );
};
