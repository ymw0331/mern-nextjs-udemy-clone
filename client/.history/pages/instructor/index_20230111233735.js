import { useState, useEffect } from "react";
import axios from 'axios';
import Jumbotron from '../../coponents/Jumbotron';
import InstructorRoute from '../../coponents/routes/InstructorRoute';

const InstructorIndex = () =>
{
  useEffect( () =>
  {
loadCourses
  } );

  return (
    <InstructorRoute>
      <Jumbotron title="Instructor Dashboard" />
    </InstructorRoute>
  );
};

export default InstructorIndex;  