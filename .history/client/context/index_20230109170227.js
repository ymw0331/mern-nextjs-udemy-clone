import { useReducer, createContext, useEffect } from "react";
import axios from 'axios';
import { useRouter } from "next/router";


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

  //router
  const router = useRouter();

  //get ls user item to context state
  useEffect( () =>
  {
    dispatch( {
      type: "LOGIN", payload: JSON.parse( window.localStorage.getItem( "user" ) ) //convert JSON to JS object
    } );
  }, [] );


  axios.interceptors.response.use(
    function ( respnse )
    {
      //any status code that lie within the range of 2XXcause function to trigger
      return response();
    },
    function ( error )
    {
      //any status code that falls outside range of 2XX cause this function to trigger
      let res = error.response();
      if ( res.status === 401 && res.config && !res.config.__isRetryRequest )
      {

        return new Promise( ( resolve, reject ) =>
        {
          axios.get( '/api/logout' )
            .then( ( data ) =>
            {
              console.log( '/401 error > logout' );
              dispatch( { type: LOGOUT } );
              window.localStorage.removeItem( 'user' );
              router.push( '/login' );
            } )
            .catch( err =>
            {
              console.log( 'AXIOS INTERCEPTORS ERROR =>', err );
              reject( error );
            } );
        } );
      }
      return Promise.reject( error );
    }
  );

  useEffect( () =>
  {
    const getCsrfToken = async () =>
    {
      const { data } = await axios.get( '/api/csrf-token' );
      axios.

    };

  }, [] );


  return ( <Context.Provider value={ { state, dispatch } }>
    { children }
  </Context.Provider> );

};


export { Context, Provider };