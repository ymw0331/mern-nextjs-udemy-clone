import Jumbotron from '../../coponents/Jumbotron';
import { useState, useContext } from "react";
import { Context } from "../../context";
import UserRoute from '../../coponents/routes/UserRoute';

const UserIndex = () =>
{
  // state
  const [ hidden, setHidden ] = useState( true );

  const {
    state: { user },
  } = useContext( Context );



  return (
    <UserRoute>

      { !hidden && ( <Jumbotron title={ JSON.stringify( user, null, 4 ) } />
      ) }
    </UserRoute>
  );
};

export default UserIndex;
