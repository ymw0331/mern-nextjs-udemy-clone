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

  return (
    <Jumbotron title={ "Secret User Page" } />

  );
};

export default UserIndex;