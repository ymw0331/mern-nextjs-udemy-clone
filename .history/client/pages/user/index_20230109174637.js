import { useEffect, useState, useContext } from 'react';
import { Context } from '../../context';
import axios from 'axios';
import Jumbotron from "../../coponents/Jumbotron";

const UserIndex = () =>
{

  useEffect( () =>
  {
    const fetchUser = async () =>
    {

      try {
        
      } catch (error) {
        console.log(error)
      }
    };
  }, [] );

  return (
    <Jumbotron title={ "Secret User Page" } />
  );
};

export default UserIndex;