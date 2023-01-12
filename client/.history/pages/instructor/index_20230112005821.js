import { useState, useEffect } from "react";
import axios from 'axios';
import Jumbotron from '../../coponents/Jumbotron';
import InstructorRoute from '../../coponents/routes/InstructorRoute';

const InstructorIndex = () =>
{
  const [ courses, setCourses ] = useState( [] );

  useEffect( () =>
  {
    loadCourses();
  }, [] );

  const loadCourses = async () =>
  {
    try
    {
      const { data } = await axios.get( "/api/instructor-courses" );
      setCourses( data );
    } catch ( error )
    {
      console.log( error );
    }
  };

  return (
    <InstructorRoute>
      <Jumbotron title="Instructor Dashboard" />
      {/* <pre>{ JSON.stringify( courses, null, 4 ) }</pre> */ }


      { courses && courses.map( course => (
        <>
        <div className='media pt-2'>

          
        </div>

        </>
      ) ) }

    </InstructorRoute>
  );
};

export default InstructorIndex;  