import { useState, useEffect, useContext } from 'react';
import { Menu } from 'antd';
import Link from 'next/Link';
import { AppstoreOutlined, LoginOutlined, LogoutOutlined, UserAddOutlined  from "@ant-design/icons";
import { Context } from '../context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const { Item } = Menu;

const TopNav = () =>
{
  const [ current, setCurrent ] = useState( "" );

  const { state, dispatch } = useContext( Context );

  const router = useRouter();

  useEffect( () =>
  {
    process.browser && setCurrent( window.location.pathname );
    // console.log( window.location.pathname );
  }, [ process.browser && window.location.pathname ] );

  const logout = async () =>
  {
    dispatch( { type: "LOGOUT" } );
    window.localStorage.removeItem( "user" );
    const { data } = await axios.get( '/api/logout' );
    toast.success( data.message );
    router.push( "/login" );
  };

  return (
    <>
      <Menu mode="horizontal" selectedKeys={ [ current ] } >
        <Item
          key="/"
          onClick={ e => setCurrent( e.key ) }
          icon={ <AppstoreOutlined /> }>
          <Link href="/" className='text-decoration-none'>
            App
          </Link>
        </Item>

        <Item
          key="/login"
          onClick={ e => setCurrent( e.key ) }
          icon={ <LoginOutlined /> }>
          <Link href="/login" className='text-decoration-none'>
            Login
          </Link>
        </Item>

        <Item
          key="/register"
          onClick={ e => setCurrent( e.key ) }
          icon={ <UserAddOutlined /> }>
          <Link href="/register" className='text-decoration-none'>
            Register
          </Link>
        </Item>

        <Item
          onClick={ logout }
          icon={ <LogoutOutlined /> }
          className="float-right"
        >
          Logout
        </Item>
      </Menu>
    </>
  );
};

export default TopNav;