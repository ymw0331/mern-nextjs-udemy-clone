import { useState } from "react";
import axios from "axios";
import InstructorRoute from "../../../coponents/routes/InstructorRoute";
import Jumbotron from '../../../coponents/Jumbotron';
import CourseCreateForm from '../../../coponents/forms/CourseCreateForm.jsx';
import Resizer from 'react-image-file-resizer';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
imoprt {useRouter}


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

  const [ image, setImage ] = useState( {} );
  const [ preview, setPreview ] = useState( "" );
  const [ uploadButtonText, setUploadButtonText ] = useState( "Upload Image" );

  const handleChange = ( e ) =>
  {
    setValues( { ...values, [ e.target.name ]: e.target.value } );
  };

  const handleImage = ( e ) =>
  {

    let file = e.target.files[ 0 ];
    setPreview( window.URL.createObjectURL( e.target.files[ 0 ] ) );
    setUploadButtonText( file.name );
    setValues( { ...values, loading: true } );

    //resize
    Resizer.imageFileResizer( file, 720, 500, "JPEG", 100, 0, async ( uri ) =>
    {
      try
      {
        let { data } = await axios.post( "/api/course/upload-image", {
          image: uri,
        } );

        console.log( "IMAGE UPLOADED", data );
        toast.success( "IMAGE UPLOADED" );
        //set image in the state
        setImage( data );
        setValues( { ...values, loading: false } );
      } catch ( error )
      {
        console.log( error );
        setValues( { ...values, loading: false } );
        toast.error( "Image upload failed. Try again later." );
      }
    } );
  };

  const handleImageRemove = async () =>
  {
    try
    {
      setValues( { ...values, loading: true } );
      const res = await axios.post( "/api/course/remove-image", { image } );
      setImage( {} );
      setPreview( "" );
      setUploadButtonText( "Upload Image" );
      setValues( { ...values, loading: false } );

    } catch ( error )
    {
      console.log( error );
      setValues( { ...values, loading: false } );
      toast.error( "Image delete failed. Try again later." );
    }
  };

  const handleSubmit = async ( e ) =>
  {
    e.preventDefault();

    try
    {
      setValues( { ...values, loading: true } );
      // console.log( values );
      const { data } = await axios.post( '/api/course', {
        ...values,
        image
      } );
      toast.success( "Great! Now you can start adding lessons" );
      router.push( "/instructor" );
      setValues( { ...values, loading: false } );

    } catch ( error )
    {
      console.log( error );
      toast.error( error.response.data );
      setValues( { ...values, loading: false } );

    }
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
          uploadButtonText={ uploadButtonText }
          handleImageRemove={ handleImageRemove }

        />
      </div>

      <pre>{ JSON.stringify( values, null, 4 ) } </pre>
      <hr />
      <pre>{ JSON.stringify( image, null, 4 ) } </pre>

    </InstructorRoute>
  );
};

export default CourseCreate;
