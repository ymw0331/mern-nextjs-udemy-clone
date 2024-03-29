import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import axios from "axios";
import { Avatar, Tooltip, Button, Modal, List, Form, Space, Input, Divider, Typography } from "antd";

import { EditOutlined, CheckOutlined, UploadOutlined } from "@ant-design/icons";
import ReactMarkdown from 'react-markdown';
import AddLessonForm from '../../../../components/forms/AddLessonForm';
import { toast } from 'react-toastify';


// import { Form } from 'antd'
// const { Item } = Form


const CourseView = () => {
  const [course, setCourse] = useState({});
  //for lessons
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    title: "",
    content: "",
    video: {}
  });
  const [uploading, setUploading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Video");


  //keep track for the video upload progress
  const [progress, setProgress] = useState(0);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setCourse(data);
  };

  //FUCNTIONS FOR ADD LESSON
  const handleAddLesson = async (e) => {
    e.preventDefault();
    // console.log(values);

    try {
      const { data } = await
        axios.post(`/api/course/lesson/${slug}/${course.instructor._id}`,
          values)

      console.log("Data ==>", data)

      setValues({ ...values, title: "", content: "", video: {} })
      setVisible(false)
      setUploadButtonText("Upload video")
      setCourse(data)
      toast("Lesson added")

    } catch (error) {
      console.log(error)
      toast("Lesson add failed ")
    }

  };

  const handleVideo = async (e) => {
    // console.log(course)
    // return

    try {
      const file = e.target.files[0];
      setUploadButtonText(file.name);
      setUploading(true);

      const videoData = new FormData();
      videoData.append("video", file);

      // save progress bar and send video as form data to backend
      const { data } = await axios.post(`/api/course/video-upload/${course.instructor._id}`, videoData, {
        onUploadProgress: (e) => {
          setProgress(Math.round((100 * e.loaded) / e.total));
        },
      });

      // once response is received
      // console.log(data);
      setValues({ ...values, video: data });
      setUploading(false);

    } catch (err) {

      console.log(err);
      setUploading(false);
      toast("Video upload failed");
    }
  };



  const handleVideoRemove = async () => {
    // console.log("handle remove video")
    try {

      setUploading(true)
      const { data } = await axios.post(`/api/course/video-remove/${course.instructor._id}`,
        values.video
      );

      // const { data } = await axios.post("api/course/video-remove", values.video)

      console.log(data)

      setValues({ ...values, video: {} })
      setUploading(false)
      setUploadButtonText("Upload another video")

    } catch (error) {

      console.log(error)
      setUploading(false)
      toast("Video remove failed")
    }
  };


  return (
    <InstructorRoute>
      <div className="contianer-fluid pt-3">
        {/* <pre>{JSON.stringify(course, null, 4)}</pre> */}
        {course && (
          <div className="container-fluid pt-1">
            <div className="media pt-2">


              <div className="media-body pl-2">

                <div className="row">
                  <Avatar
                    size={80}
                    src={course.image ? course.image.Location : "/course.png"}
                  />
                  <div className="col">
                    <h5 className="mt-2 text-primary">{course.name}</h5>
                    <p style={{ marginTop: "-10px" }}>
                      {course.lessons && course.lessons.length} Lessons
                    </p>
                    <p style={{ marginTop: "-15px", fontSize: "10px" }}>
                      {course.category}
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
              <hr />
            </div>
            <div className='row'>
              <div className='col'>
                <ReactMarkdown
                  children={course.description}
                >
                </ReactMarkdown>
                {/* { course.description } */}
              </div>
            </div>

            <div className='row'>
              <Button
                onClick={() => setVisible(true)}
                className="col-md-6 offset-md-3 text-center"
                type='primary'
                shape='round'
                icon={<UploadOutlined />}
                size="large"
              >
                Add Lesson
              </Button>
            </div>

            <br />

            <Modal
              title="+ Add Lesson"
              centered
              visible={visible}
              onCancel={() => setVisible(false)}
              footer={null}
            >
              <AddLessonForm
                values={values}
                setValues={setValues}
                handleAddLesson={handleAddLesson}
                uploading={uploading}
                uploadButtonText={uploadButtonText}
                handleVideo={handleVideo}
                progress={progress}
                handleVideoRemove={handleVideoRemove}
              />

            </Modal>

            <div className="row pb-5">

              <div className="col lesson-list">

                <h4>{course && course.lessons && course.lessons.length} Lessons</h4>

                {/* 
                <List
                  dataSource={course && course.lessons}
                  renderItem={(item, index) => (
                    <List.Item

                      title={item.title}
                    >


                    </List.Item>
                  )}
                /> */}


                <Divider />
                <List

                  dataSource={course && course.lessons}
                  renderItem={(item, index) => (
                    <List.Item>
                      <Typography.Text type="warning">{index + 1}</Typography.Text> {item.title}
                    </List.Item>
                  )}
                />


              </div>
            </div>

          </div>
        )
        }
      </div>
    </InstructorRoute>
  );
};

export default CourseView;
