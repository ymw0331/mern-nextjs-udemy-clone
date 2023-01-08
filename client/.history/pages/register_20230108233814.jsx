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
          <input type="text"
          className= "form-control mb-4 p-3">

          </input>


        </form>


      </div>

    </>

  );
};

export default Register;