import Jumbotron from '../coponents/Jumbotron';

const Register = () =>
{

  const handleSumbit = e =>
  {

  };

  return (
    <>
      <Jumbotron title={ "Register" }
        subTitle={ "Please register with your details" } />
      <div className='container col-md-4 offset-md-4 pb-5'>
        <form onSubmit={ handleSumbit }>
          <input></input>


        </form>


      </div>

    </>

  );
};

export default Register;