import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import InstructorRoute from '../../../../coponents/routes/InstructorRoute';
import axios from 'axios';

const CourseView = () =>
{
  const [ course, setCourse ] = useState( {} );
  const router = useRouter();
  const { slug } = router.query;

  useEffect( () =>
  {
    console.log( slug );
    loadCourse();
  }, [ slug ] );

  const loadCourse = async () =>
  {course/:slug
    const { data } = await axios.get( `/api/course/${ slug }` );
    setCourse( data );
  };

  return (
    <InstructorRoute>
      <div className='container-fluid pt-3' >
        <pre> { JSON.stringify( course, null, 4 ) }</pre>
      </div>
    </InstructorRoute>
  );
};

export default CourseView;