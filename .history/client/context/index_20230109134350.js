import { useReducer, createContext } from "react";

//initail state 
const initialState = {
  user: null
};

//create context
const Context = createContext();

//root reducer
const rootReducer = ( state, action ) =>
{
  switch ( action.type )
  {
    case "LOGIN":
      return { ...state, user: action.payload };
  }
};