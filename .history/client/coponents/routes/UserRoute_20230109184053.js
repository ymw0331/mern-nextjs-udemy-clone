import Jumbotron from '../../coponents/Jumbotron';
import { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import axios from "axios";
import { useRouter } from 'next/router';
import { SyncOutlined } from '@ant-design/icons';

const UserRoute = ({children}) =>
{
  // state
  const [ ok, setOk ] = useState( true );

  //route
  const router = useRouter();

  const {
    state: { user },
  } = useContext( Context );

  useEffect( () =>
  {
    fetchUser();
  }, [] );

  const fetchUser = async () =>
  {
    try
    {
      const { data } = await axios.get( "/api/current-user" );
      // console.log( data );
      if ( data.ok )
        setOk( true );
    } catch ( err )
    {
      console.log( err );
      setOk( false );
      router.push( '/login' );
    }
  };

  return (
    <>

      { !ok ? '': <>{children}</> }
    </>
  );
};

export default UserRoute;
