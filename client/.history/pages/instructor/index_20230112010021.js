import { useState, useEffect } from "react";
import axios from 'axios';
import Jumbotron from '../../coponents/Jumbotron';
import InstructorRoute from '../../coponents/routes/InstructorRoute';
import { Avatar } from 'antd';


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
            <Avatar
              size={ 80 }
              src={ course.image ? course.image.Location : "/course.png" }
            />
            <div className='media-body pl-2'>
        <div className=''></div>

            </div>


          </div>

        </>
      ) ) }

    </InstructorRoute>
  );
};

export default InstructorIndex;  