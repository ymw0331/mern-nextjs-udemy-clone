import axios from 'axios';
import Jumbotron from "../../../coponents/Jumbotron";
import InstructorRoute from '../../coponents/routes/InstructorRoute';

const InstructorIndex = () =>
{
  return (

    <InstructorRoute>
      <Jumbotron title="Instructor Index" />
    </InstructorRoute>
  );
};

export default InstructorIndex;  