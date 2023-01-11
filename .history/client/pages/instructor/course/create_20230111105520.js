import { useState, useEffect } from 'react';
import axios from 'axios';
import Jumbotron from '../../../coponents/Jumbotron';
import InstructorRoute from '../../../coponents/routes/InstructorRoute';

const CourseCreate = () =>
{
  const [ values, setValues ] = useState( {
    name: "",
    description: "",
    price: "9.99",
    uploading: false,
    paid: true,
    loading: false,
    initPreview: ''
  } );


  const handleChange = ( e ) =>
  {
    setValues( { ...values, [ e.target.name ]: e.target.value } );

  };


  const handleImage = () =>
  {

  };


  const handleSubmit = ( e ) =>
  {
    e.preventDefault();
    console.log( values );
  };

  const courseCreateForm = () =>
  {
    <form onSubmit={ handleSubmit }>
      <div className='form-gorup'></div>

    </form>;
  };


  return (

    <InstructorRoute>
      <Jumbotron title="Create New Course" />
      <div className='pt-3 pb-3'>
        { courseCreateForm() }

      </div>



    </InstructorRoute>
  );
};

export default CourseCreate;  