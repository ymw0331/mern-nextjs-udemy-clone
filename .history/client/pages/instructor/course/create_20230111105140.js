import { useState, useEffect } from 'react';
import axios from 'axios';
import Jumbotron from '../../../coponents/Jumbotron';
import InstructorRoute from '../../../coponents/routes/InstructorRoute';

const CourseCreate = () =>
{
  const [ values, setValues ] = useState({
    name:"",
    
  });

  return (

    <InstructorRoute>
      <Jumbotron title="Create New Course" />
    </InstructorRoute>
  );
};

export default CourseCreate;  