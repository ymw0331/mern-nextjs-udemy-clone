import { useState } from 'react';
import axios from 'axios';
import Jumbotron from '../coponents/Jumbotron';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/Link';

const Login = () =>
{
  const [ name, setName ] = useState( "wayne" );
  const [ email, setEmail ] = useState( "wayne@gmail.com" );
  const [ password, setPassword ] = useState( "wwwwww" );
  const [ loading, setLoading ] = useState( false );


  const handleSumbit = async ( e ) =>
  {
    e.preventDefault();
    try
    {
      const { data } = await axios.post( `/api/login`, {
        email,
        password
      } );
      toast.success( "Login successful." );
      setLoading( false );
    } catch ( err )
    {
      toast.error( err.response.data );
      setLoading( false );
    }

  };

  return (
    <>
      <Jumbotron
        title={ "Login" }
        subTitle={ "Please login with your details" }
      />

      <div className='container col-md-4 offset-md-4 pb-5 mt-3'>

        <form onSubmit={ handleSumbit }>
          <input
            type="text"
            className="form-control mb-4 p-3"
            value={ name }
            required
            placeholder='Enter your name'
            onChange={ ( e ) => setName( e.target.value ) }
          >
          </input>

          <input
            type="email"
            className="form-control mb-4 p-3"
            value={ email }
            required
            placeholder='Enter your email'
            onChange={ ( e ) => setEmail( e.target.value ) }
          >
          </input>


          <input
            type="password"
            className="form-control mb-4 p-3"
            value={ password }
            required
            placeholder='Enter your password'
            onChange={ ( e ) => setPassword( e.target.value ) }
          >
          </input>

          <button type='submit' className='btn btn-block btn-primary p-3'
            disabled={ !name || !email || !password || loading }
          >
            { loading ? <SyncOutlined spin /> : "Sign In" }

          </button>

        </form>

        <p className='text-center p-3'>
          Already registered? { " " }
          <Link href="/login">
            Login
          </Link>
        </p>
      </div>

    </>

  );
};

export default Login;