import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import InstructorRoute from '../../../../coponents/routes/InstructorRoute';

const CourseView = () =>
{
  const [ course, setCourse ] = useState( {} );
  const router = useRouter();
  const { slug } = router.query;

  useEffect( () =>
  {
    console.log( slug );
  }, [] );

  return (
    <InstructorRoute>
      <div className='container-fluid pt-3' >

        <p></p>

      </div>

    </InstructorRoute>

  );


};



export default CourseView;