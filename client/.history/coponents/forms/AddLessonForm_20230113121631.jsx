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

        <textarea
          className=''
          id=''
          cols="7"
          rows="70"
          onChange={ ( e ) => setValues( { ...values, content: e.target.value } ) }
          values={ values.content }
          placeholder="Content"
        >
        </textarea>

<Button onClick={}

      </form>
    </div>
  );
};


export default AddLessonForm;