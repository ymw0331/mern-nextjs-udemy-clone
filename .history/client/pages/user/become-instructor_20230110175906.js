import Jumbotron from '../../coponents/Jumbotron';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../context';
import { Button } from 'antd';
import { SettingOutlined, UserSwitchOutlined,  } from '@ant-design/icons';


const BecomeInstructor = () =>
{
  return (


    <div>
      <Jumbotron title="Become Instructor" />
    </div>


  );
};

export default BecomeInstructor;  