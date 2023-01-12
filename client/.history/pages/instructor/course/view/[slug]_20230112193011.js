import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InstructorRoute from '../../../../coponents/routes/InstructorRoute';
import axios from "axios";
import { Avatar } from "antd";

const CourseView = () =>
{
  const [ course, setCourse ] = useState( {} );

  const router = useRouter();
  const { slug } = router.query;

  useEffect( () =>
  {
    loadCourse();
  }, [ slug ] );

  const loadCourse = async () =>
  {
    const { data } = await axios.get( `/api/course/${ slug }` );
    setCourse( data );
  };

  return (
    <InstructorRoute>
      <div className="contianer-fluid pt-3">
        {/* <pre>{ JSON.stringify( course, null, 4 ) }</pre> */ }

        { course && <div className='container-fluid pt-1' >
          <div className='media pt-2'>
            <Avatar
              size={ 80 }
              src={ course.image ? course.image.Location : "/course.png" }
            />
  <idv></idv>

          </div>

        </div> }
      </div>
    </InstructorRoute>
  );
};

export default CourseView;
