import { useState, useEffect } from "react";
import axios from 'axios';
import Jumbotron from '../../coponents/Jumbotron';
import InstructorRoute from '../../coponents/routes/InstructorRoute';
import { Avatar } from 'antd';
import Link from "next/link";

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
      <pre>{ JSON.stringify( courses, null, 4 ) }</pre>

      { courses && courses.map( course => (
        <>
          <div className='media pt-2'>
            <Avatar
              size={ 80 }
              src={ course.image ? course.image.Location : "/course.png" }
            />
            <div className='media-body pl-2'>
              <div className='row'>
                <div className='col'>
                  <Link
                    href={ `/instructor/course/view/${ course._id }` }
                    className="pointer"
                  >
                    <p className='mt-3 h5 text-primary text-decoration-none'>
                      { course.name }
                    </p>
                  </Link>
                  <p style={ { marginTop: "-10px" } }>
                    { course.lessons.length } Lessons
                  </p>

                  { course.lessons.length < 5 ? (
                    <p>At least 5 lessons are required to publish a course</p>
                  ) : course.published ? (
                    <p>Your course is live in the marketplace</p>
                  ) : (
                    <p>Your course is ready to be published</p>
                  )
                  }

                </div>
              </div>

            </div>


          </div>

        </>
      ) ) }

    </InstructorRoute>
  );
};

export default InstructorIndex;  