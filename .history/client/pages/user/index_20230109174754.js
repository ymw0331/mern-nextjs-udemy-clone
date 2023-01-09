import { useEffect, useState, useContext } from 'react';
import { Context } from '../../context';
import axios from 'axios';
import Jumbotron from "../../coponents/Jumbotron";

const UserIndex = () =>
{

  //state
  const [ ok, setOk ] = useState( true );
  const { state: { user } } = useContext( Context );

  useEffect( () =>
  {
    const fetchUser = async () =>
    {
      try
      {
        const { data } = await axios.get( "/api/current-user" );

      } catch ( error )
      {
        console.log( error );
      }
    };
  }, [] );

  return (
    <Jumbotron title={ "Secret User Page" } />
  );
};

export default UserIndex;