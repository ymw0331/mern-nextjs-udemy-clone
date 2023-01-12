import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InstructorRoute from "../../../../coponents/routes/InstructorRoute";
import axios from "axios";
import { Avatar, Tooltip } from "antd";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";
import ReactMarkdown from 'react-markdown';

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
        {/* <pre>{JSON.stringify(course, null, 4)}</pre> */ }
        { course && (
          <div className="container-fluid pt-1">
            <div className="media pt-2">


              <div className="media-body pl-2">

                <div className="row">
                  <Avatar
                    size={ 80 }
                    src={ course.image ? course.image.Location : "/course.png" }
                  />
                  <div className="col">
                    <h5 className="mt-2 text-primary">{ course.name }</h5>
                    <p style={ { marginTop: "-10px" } }>
                      { course.lessons && course.lessons.length } Lessons
                    </p>
                    <p style={ { marginTop: "-15px", fontSize: "10px" } }>
                      { course.category }
                    </p>
                  </div>
                  <div className="d-flex col pt-4 " >
                    <Tooltip title="Edit">
                      <EditOutlined className="h5 pointer text-warning m-2" />
                    </Tooltip>
                    <Tooltip title="Publish">
                      <CheckOutlined className="h5 pointer text-danger m-2" />
                    </Tooltip>
                  </div>
                </div>

              </div>

            </div>
            <div className='row'>
              <div className='col'>
                <ReactMarkdown
                  source=
                >
                </ReactMarkdown>
                { course.description }
              </div>

            </div>

          </div>
        ) }
      </div>
    </InstructorRoute>
  );
};

export default CourseView;
