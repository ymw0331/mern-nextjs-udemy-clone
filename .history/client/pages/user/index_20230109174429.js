import { useEffect, useState, useContext } from 'react';
import { Context } from '../../context';
import Jumbotron from "../../coponents/Jumbotron";

const UserIndex = () =>
{
  return (
    <Jumbotron title={ "Secret User Page" } />
  );
};

export default UserIndex;