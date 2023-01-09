import Jumbotron from '../../coponents/Jumbotron';
import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from '../../coponents/routes/UserRoute';

const UserIndex = () =>
{

  const {
    state: { user },
  } = useContext( Context );



  return (
    <UserRoute>

      { !hidden && ( <Jumbotron title={ JSON.stringify( user, null, 4 ) } />

      ) }
    </>
  );
};

export default UserIndex;
