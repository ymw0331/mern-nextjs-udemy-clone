import { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import axios from "axios";

const UserIndex = () =>
{
  // state
  const [ hidden, setHidden ] = useState( true );

  const {
    state: { user },
  } = useContext( Context );

  [ HPM ] Error occurred while proxying request localhost: 3000 / api / current - user to http://localhost:8000/ [ECONNRESET]
  const fetchUser = async () =>
  {
    try
    {
      const { data } = await axios.get( "/api/current-user" );
      console.log( data );
      setHidden( false );
    } catch ( err )
    {
      console.log( err );
      setHidden( true );
    }
  };

  return (
    <>
      { !hidden && (
        <pre>{ JSON.stringify( user, null, 4 ) }</pre>
      ) }
    </>
  );
};

export default UserIndex;
