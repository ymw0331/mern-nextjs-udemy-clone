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
    </div>


  );
};

export default BecomeInstructor;  