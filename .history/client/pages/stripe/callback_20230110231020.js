import { useContext, useEffect } from "react";
import { Context } from "../../context";
import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";
import Jumbotron from '../../coponents/Jumbotron';

const StripeCallback = () =>
{
  const {
    state: { user },
    dispatch()
  } = useContext( Context );

  useEffect( () =>
  {
    if ( user )
    {
      axios.post( "/api/get-account-status" ).then( ( res ) =>
      {
        console.log( res );
        // window.location.href = "/instructor";
      } );
    }
  }, [ user ] );

  return (

    <>
      <Jumbotron title={ "Callback page" } />
      <SyncOutlined
        spin
        className="d-flex justify-content-center display-1 text-danger p-5"
      />
    </>

  );
};

export default StripeCallback;
