import axios from 'axios';

import InstructorRoute from '../../coponents/routes/InstructorRoute';

const InstructorIndex = () =>
{
  return (

    <InstructorRoute>
      <Jumbotron title="Instructor Dashboard" />
    </InstructorRoute>
  );
};

export default InstructorIndex;  