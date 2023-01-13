import { Button } from "antd";

const AddLessonForm = ( {
  values, setValues, handleAddLesson }
) =>
{
  return (
    <div className='container pt-3'>
      <form onSubmit={ handleAddLesson }

      >
        <input type="text"
          className="form-control square"
          onChange={ ( e ) => setValues( { ...values, title: e.target.value } ) }
          values={ values.title }
          placeholder="Title"
          autoFocus
          required

        ></input>


      </form>
    </div>
  );
};


export default AddLessonForm;