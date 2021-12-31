import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  projetos: [
    { id: 1, titulo: "projeto um" },
    { id: 2, titulo: "projeto dois" },
    { id: 3, titulo: "projeto três" }
  ],
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const addProjeto = (projeto) => {
      dispatch ({
          type: 'ADD_PROJETO',
          payload: projeto
      })
  }
  return (
    <GlobalContext.Provider
      value={{
        projetos: state.projetos,
        addProjeto
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};