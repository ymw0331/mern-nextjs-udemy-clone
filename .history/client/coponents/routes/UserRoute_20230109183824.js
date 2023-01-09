import Jumbotron from '../../coponents/Jumbotron';
import { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import axios from "axios";

const UserRoute = () =>
{
  // state
  const [ ok, setOk ] = useState( true );

  const {
    state: { user },
  } = useContext( Context );

  useEffect( () =>
  {
    fetchUser();
  }, [] );

  const fetchUser = async () =>
  {
    try
    {
      const { data } = await axios.get( "/api/current-user" );
      // console.log( data );
      if (data.ok)
      setOk( true );
    } catch ( err )
    {
      console.log( err );
      setOk( false );
    }
  };

  return (
    <>

      { !hidden && ( <Jumbotron title={ JSON.stringify( user, null, 4 ) } />

      ) }
    </>
  );
};

export default UserRoute;
