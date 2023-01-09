import { useReducer, createContext, useEffect } from "react";
import axios from 'axios';

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
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

//context provider
const Provider = ( { children } ) =>
{
  const [ state, dispatch ] = useReducer( rootReducer, initialState );

  //get ls user item to context state
  useEffect( () =>
  {
    dispatch( {
      type: "LOGIN", payload: JSON.parse( window.localStorage.getItem( "user" ) ) //convert JSON to JS object
    } );
  }, [] );


  axios.interceptors.response.use(
    function ( respnse ){
      //any status code that lie within the range of 2XXcause function to trigger
      return response();
    }


  );

  return ( <Context.Provider value={ { state, dispatch } }>
    { children }
  </Context.Provider> );

};


export { Context, Provider };