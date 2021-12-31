import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  projetos: [
    {
      id: 1,
      titulo: "projeto um",
      descricao: "Descrição",
      data: "data da criação",
    },
    {
      id: 2,
      titulo: "projeto dois",
      descricao: "Descrição2",
      data: "data da criação",
    },
    {
      id: 3,
      titulo: "projeto três",
      descricao: "Descrição3",
      data: "data da criação",
    },
  ],
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const addProjeto = (projeto) => {
    dispatch({
      type: "ADD_PROJETO",
      payload: projeto,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        projetos: state.projetos,
        addProjeto,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
