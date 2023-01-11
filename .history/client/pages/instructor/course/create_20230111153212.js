import { useState, useEffect } from "react";
import axios from "axios";
import InstructorRoute from "../../../coponents/routes/InstructorRoute";
import Jumbotron from '../../../coponents/Jumbotron';
import CourseCreateForm from '../../../coponents/forms/CourseCreateForm.jsx';
import Resizer from 'react-image-file-resizer'


const CourseCreate = () =>
{
  // state
  const [ values, setValues ] = useState( {
    name: "",
    description: "",
    price: "9.99",
    uploading: false,
    paid: true,
    category: "",
    loading: false,
    imagePreview: "",
  } );

  const [ preview, setPreview ] = useState( "" );
  const [ uploadButtonText, setUploadButtonText ] = useState( "" );

  const handleChange = ( e ) =>
  {
    setValues( { ...values, [ e.target.name ]: e.target.value } );
  };

  const handleImage = ( e ) =>
  {

    let file = e.target.files[ 0 ];
    setPreview( window.URL.createObjectURL( e.target.files[ 0 ] ) );
    setUploadButtonText( file.name );

    setValues( { ...values, laoding: true } );

    //resize

  };

  const handleSubmit = ( e ) =>
  {
    e.preventDefault();
    console.log( values );
  };




  return (
    <InstructorRoute>
      <Jumbotron title={ "Create New Course" } />
      <div className="pt-3 pb-3">
        <CourseCreateForm
          handleSubmit={ handleSubmit }
          handleImage={ handleImage }
          handleChange={ handleChange }
          values={ values }
          setValues={ setValues }
          preview={ preview }
        />
      </div>

      <pre>{ JSON.stringify( values, null, 4 ) } </pre>
    </InstructorRoute>
  );
};

export default CourseCreate;
