import { useEffect, useState, useContext } from 'react';
import { Context } from '../../context';
import axios from 'axios';
import Jumbotron from "../../coponents/Jumbotron";

const UserIndex = () =>
{
  //state
  const [ hidden, setHidden ] = useState( true );
  const { state: { user } } = useContext( Context );

  useEffect( () =>
  {
    fetchUser();
  }, [] );

  const fetchUser = async () =>
  {
    try
    {
      const { data } = await axios.get( "/api/current-user" );
      console.log( data );
      setHidden( false );
    } catch ( error )
    {
      console.log( error );
      setHidden( false );
    }
  };
  return (
    <>
      <Jumbotron title=${JSON.stringify( user ) } } />

    </>


  );
};

export default UserIndex;