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
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default BecomeInstructor;  