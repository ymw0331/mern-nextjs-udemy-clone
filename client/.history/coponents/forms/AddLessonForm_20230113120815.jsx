import { Button } from "antd";

const AddLessonForm = ( {
  values, setValues, handleAddLesson }
) =>
{
  return (
    <div className='container pt-3'>
      <form onSubmit={ handleAddLesson }
      
      >
<input type="text"></input>


      </form>
    </div>
  );
};


export default AddLessonForm;