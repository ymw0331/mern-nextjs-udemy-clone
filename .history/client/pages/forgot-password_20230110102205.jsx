import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from '../context';
import { useRouter } from 'next/router';

const ForgotPassword = () =>
{
  //state
  const [ email, setEmail ] = useState( "" );
  const [ success, setSuccess ] = useState( "" );
  const [ code, setCode ] = useState( "" );
  const [ newPassword, setNewPassword ] = useState( "" );
  const [ loading, setLoading ] = useState( false );

  //context
  const {state: {user} } =useContext()




};