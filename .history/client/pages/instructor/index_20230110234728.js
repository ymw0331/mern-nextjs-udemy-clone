import axios from 'axios';
import Jumbotron from "../../../coponents/Jumbotron";
import InstructorRoute from '../../coponents/routes/InstructorRoute';

const instructorIndex = () =>
{
  return (

    <InstructorRoute>
      <Jumbotron title="Instructor Dashboard" />
    </InstructorRoute>
  );
};

export default InstructorIndex;  