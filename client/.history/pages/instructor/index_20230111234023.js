import { useState, useEffect } from "react";
import axios from 'axios';
import Jumbotron from '../../coponents/Jumbotron';
import InstructorRoute from '../../coponents/routes/InstructorRoute';

const InstructorIndex = () =>
{
  useEffect( () =>
  {
    loadCourses();
  }, [] );

  const loadCourses = async () =>
  {
    try {
      
    } catch (error) {
      console
    }
  };

  return (
    <InstructorRoute>
      <Jumbotron title="Instructor Dashboard" />
    </InstructorRoute>
  );
};

export default InstructorIndex;  