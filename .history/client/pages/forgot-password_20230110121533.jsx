import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from '../context';
import { useRouter } from 'next/router';
import Jumbotron from '../coponents/Jumbotron';

const ForgotPassword = () =>
{
  //state
  const [ email, setEmail ] = useState( "" );
  const [ success, setSuccess ] = useState( true );
  const [ code, setCode ] = useState( "" );
  const [ newPassword, setNewPassword ] = useState( "" );
  const [ loading, setLoading ] = useState( false );

  //context
  const { state: { user } } = useContext( Context );

  //router
  const router = useRouter();

  //redirect if user is logged in
  useEffect( () =>
  {
    if ( user !== null ) router.push( "/" );
  }, [] );

  const handleSubmit = async ( e ) =>
  {
    e.preventDefault();
    try
    {
      setLoading( true );
      const { data } = await axios.post( "/api/forgot-password", { email } );
      setSuccess( true );
      toast( "Check your email for the secret code" );

    } catch ( err )
    {
      setLoading( false );
      toast( err.response.data );
    }
  };

  const Reset

  return (
    <>
      <Jumbotron title={ "Forgot Password" } />
      <div className="contaier col-md-4 offset-md-4 pb-5" >

        <form onSubmit={ handleSubmit }>

          <input
            type="email"
            className='form-control mb-4 p-4 mt-3'
            value={ email }
            onChange={ ( e ) => setEmail( e.target.value ) }
            placeholder="Enter email"
          />
          { success && <>
            <input
              type="text"
              className='form-control mb-4 p-4 mt-3'
              value={ code }
              onChange={ ( e ) => setCode( e.target.value ) }
              placeholder="Enter secret code"
            />
            <input
              type="password"
              className='form-control mb-4 p-4 mt-3'
              value={ newPassword }
              onChange={ ( e ) => setNewPassword( e.target.value ) }
              placeholder="Enter new password"
            />
          </> }

          <button
            className='btn btn-primary btn-block p-2'
            disabled={ loading || !email }
          >
            { loading ? <SyncOutlined spin /> : "Reset password" }
          </button>

        </form>

      </div>
    </>
  );


};

export default ForgotPassword;