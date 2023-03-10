import { Select, Button, Avatar } from "antd";

const { Option } = Select;

const CourseCreateForm = ( {
  handleSubmit,
  handleImage,
  handleChange,
  values,
  setValues,
} ) =>
{

  const children = [];

  for ( let i = 9.99; i <= 100.99; i++ )
  {
    children.push(
      <Option
        key={ i.toFixed( 2 ) }
      >
        ${ i.toFixed( 2 ) }
      </Option>
    );
  }


  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-group p-1 mb-2">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={ values.name }
          onChange={ handleChange }
        />
      </div>

      <div className="form-group p-1 mb-2">
        <textarea
          name="description"
          cols="7"
          rows="7"
          value={ values.description }
          className="form-control"
          onChange={ handleChange }
        ></textarea>
      </div>

      <div className="form-row p-1 mb-2">
        <div className="col">
          <div className="form-group">
            <Select
              style={ { width: "100%" } }
              size="large"
              value={ values.paid }
              onChange={ ( v ) => setValues( { ...values, paid: !values.paid } ) }
            >
              <Option value={ true }>Paid</Option>
              <Option value={ false }>Free</Option>
            </Select>
          </div>
        </div>

        { values.paid && (
          <div className='form-group'>
            <Select
              defaultValue="9.99"
              style={ { width: '100%' } }
              onChange={ ( v ) => setValues( { ...values, price: v } ) }
              tokenSeparators={ [ , ] }
              size="large"
            >
              { children }

            </Select>
          </div>
        ) }
      </div>

      <div className="form-group p-1 mb-2">
        <input
          type="text"
          name="category"
          className="form-control"
          placeholder="Category"
          value={ values.category }
          onChange={ handleChange }
        />
      </div>

      <div className="form-row p-1 mb-2">
        <div className="col">
          <div className="form-group">
            <label className="btn btn-outline-secondary btn-block text-left">
              { values.loading ? "Uploading" : "Image Upload" }
              <input
                type="file"
                name="image"
                onChange={ handleImage }
                accept="image/*"
                hidden
              />
            </label>
          </div>
        </div>

        { preview && (
          <div className='col-md-6'>
            <Avatar
              width={ 200 } src={ preview }
            />

          </div>
        ) }

      </div>



      <div className="row p-1 mb-2">
        <div className="col">
          <Button
            onClick={ handleSubmit }
            disabled={ values.loading || values.uploading }
            className="btn btn-primary"
            loading={ values.loading }
            type="primary"
            size="large"
            shape="round"
          >
            { values.loading ? "Saving..." : "Save & Continue" }
          </Button>
        </div>
      </div>
    </form>
  );

};

export default CourseCreateForm;
