//going to use context api
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Food", amount: -120 },
    { id: 2, text: "Salary", amount: 500 },
    { id: 3, text: "Internet", amount: -200 },
    { id: 4, text: "Phone", amount: 100 },
  ],
};

//Create context
export const GlobalContext = createContext(initialState);

//Provide component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
