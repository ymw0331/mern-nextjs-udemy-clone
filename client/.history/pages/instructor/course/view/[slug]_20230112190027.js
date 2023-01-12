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
  {
const {data} = await axios.get(`api/`)
  };

  return (
    <InstructorRoute>
      <div className='container-fluid pt-3' >
        <p> view{ slug }</p>

      </div>
    </InstructorRoute>
  );
};

export default CourseView;