import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import Link from 'next/Link';
import { AppstoreOutlined, LoginOutlined, UserAddOutlined } from "@ant-design/icons";


const { Item } = Menu;

const TopNav = () =>
{

  const [ current, setCurrent ] = useState( "" );

  useEffect( () =>
  {
    process.browser && setCurrent( window.location.pathname );
  }, [process.browser && ] );

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
      </Menu>
    </>
  );
};

export default TopNav;