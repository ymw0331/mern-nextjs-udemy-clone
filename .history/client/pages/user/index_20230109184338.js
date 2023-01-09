import Jumbotron from '../../coponents/Jumbotron';
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



  return (
    <>

      { !hidden && ( <Jumbotron title={ JSON.stringify( user, null, 4 ) } />

      ) }
    </>
  );
};

export default UserIndex;
