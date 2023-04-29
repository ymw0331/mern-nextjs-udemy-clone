import Jumbotron from '../../components/Jumbotron';
import { useState, useContext } from "react";
import { Context } from "../../context";
import UserRoute from '../../components/routes/UserRoute';

const UserIndex = () => {
  // state
  const [hidden, setHidden] = useState(true);

  const {
    state: { user },
  } = useContext(Context);



  return (
    <UserRoute>
      {/* { <Jumbotron title={ JSON.stringify( user, null, 4 ) } /> } */}
      <Jumbotron title={"User dashboard"} />


    </UserRoute>
  );
};

export default UserIndex;
