import Jumbotron from '../../coponents/Jumbotron';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../context';
import { Button } from 'antd';
import { SettingOutlined, UserSwitchOutlined, LoadingOutlined } from '@ant-design/icons';
import toast


const BecomeInstructor = () =>
{
  return (


    <div>
      <Jumbotron title="Become Instructor" />
    </div>


  );
};

export default BecomeInstructor;  