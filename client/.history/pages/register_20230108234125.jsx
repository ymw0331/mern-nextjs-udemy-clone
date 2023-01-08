import { useState } from 'react';
import Jumbotron from '../coponents/Jumbotron';


const Register = () =>
{
  const [ name, setName ] = useState( "" );
  const [ email, setEmail ] = useState( "" );
  const [ password, setPassword ] = useState( "" );

  const handleSumbit = e =>
  {

  };

  return (
    <>
      <Jumbotron
        title={ "Register" }
        subTitle={ "Please register with your details" }
      />

      <div className='container col-md-4 offset-md-4 pb-5'>

        <form onSubmit={ handleSumbit }>
          <input
            type="text"
            className="form-control mb-4 p-3"
            value={ name }
            required
            placeholder='Enter your name'
            onChange={ setName( e.target.value ) }
          >
          </input>

          <input
            type="text"
            className="form-control mb-4 p-3"
            value={ email }
            required
            placeholder='Enter your email'
            onChange={ setName( e.target.value ) }
          >
          </input>


          <input
            type="text"
            className="form-control mb-4 p-3"
            value={ name }
            required
            placeholder='Enter your name'
            onChange={ setName( e.target.value ) }
          >
          </input>



        </form>


      </div>

    </>

  );
};

export default Register;