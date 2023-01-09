import Jumbotron from '../../coponents/Jumbotron';
import { useState, useContext } from "react";
import { Context } from "../../context";

const UserIndex = () =>
{

  const {
    state: { user },
  } = useContext( Context );



  return (
    <>

      { !hidden && ( <Jumbotron title={ JSON.stringify( user, null, 4 ) } />

      ) }
    </>
  );
};

export default UserIndex;
