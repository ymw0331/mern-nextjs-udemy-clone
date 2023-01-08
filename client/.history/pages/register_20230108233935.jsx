import { useState } from 'react';
import Jumbotron from '../coponents/Jumbotron';


const Register = () =>
{
  const [ name, SetName ] = useState( "" );
  const [ email, SetEmail ] = useState( "" );
  const [ password, SetPassword ] = useState( "" );

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
            value={ name}
            onChange={ }>

          </input>


        </form>


      </div>

    </>

  );
};

export default Register;