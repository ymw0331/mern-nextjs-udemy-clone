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
              <p className='lead text-warning'>
                Edemy partners with stripe to transfer earnings to your bank account
              </p>

              <Button
                className='mb-3'
                type='primary'
                block shape="round"
                icon={ loading ? <LoadingOutlined /> : <SettingOutlined /> }
                size="large"
                onClick={becomeInstructor}
                disabled={}                


                >

              </Button>

              <p className='lead'>
                You will be redirected to stripe to complete onboarding process
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default BecomeInstructor;  