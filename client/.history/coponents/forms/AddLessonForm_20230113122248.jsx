import { Button } from "antd";

const AddLessonForm = ( {
  values, setValues, handleAddLesson, uploading }
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
          className='form-control mt-3'
          cols="7"
          rows="7"
          onChange={ ( e ) => setValues( { ...values, content: e.target.value } ) }
          values={ values.content }
          placeholder="Content"
        >
        </textarea>

        <label
          className='btn btn-dark btn-block text-left mt-3'
          
        >

        </label>


        <Button
          onClick={ handleAddLesson }
          className="col mt-"
          size='large'
          type='primary'
          loading={ uploading }
          shape="round"
        >Save
        </Button>

      </form>
    </div>
  );
};


export default AddLessonForm;