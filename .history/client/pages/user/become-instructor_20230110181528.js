import Jumbotron from '../../coponents/Jumbotron';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../context';
import { Button } from 'antd';
import { SettingOutlined, UserSwitchOutlined, LoadingOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import UserRoute from "../../coponents/routes/UserRoute";



const BecomeInstructor = () =>
{

  //state
  const [ loading, setLoading ] = useState( false );
  const {
    state: { user }
  } = useContext( Context );


  const becomeInstructor = async ( req, res ) =>
  {
    // console.log( "Become instructor" );
    setLoading( true );
    axios.post( "/api/make-instructor" )
      .then( res =>
      {
        console.log( res );
        window.location.href = res.data;

      } );


  };

  return (

    <div>
      <Jumbotron title="Become Instructor" />

      <div className='continer '>
        <div className='row'>
          <div className='col-md-6 offset-md-3 text-center'>
            <div className='pt-4'>
              <UserSwitchOutlined className='display-1 pb-3' />
              <br />
              <h2>Setup payout to publish courses on Edemy</h2>
              <div className='lead text-warning'>
                Edemy partners with stripe to transfer earnings to your bank account
              </div>

              <Button
                className='mb-3'
                type='primary'
                block shape="round"
                icon={ loading ? <LoadingOutlined /> : <SettingOutlined /> }
                size="large"
                onClick={ becomeInstructor }
                disabled={ user && user.role && user.role.includes( "Instructor" )
                  || loading }
              >
                {
                  loading ? "Processing" : "Payout Setup"
                }
              </Button>

              <div className='lead'>
                You will be redirected to stripe to complete onboarding process
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default BecomeInstructor;  