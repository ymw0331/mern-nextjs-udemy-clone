import { useContext, useEffect } from 'react';
import { Context } from 'react';
import { SyncOutlined } from '@ant-design/icons';
import axios from 'axios';

const StripeCallback = () =>
{
  const { state: { user } } = useContext( Context );

  useEffect( () =>
  {
    if ( user )
    {
      axios.post( '/api/get-account-status' ).then( res =>
      {
        window.location.href = "/instructor";
      } );
    }
  }, [ user ] );

  return (

    
<SyncOutlined

  );
};