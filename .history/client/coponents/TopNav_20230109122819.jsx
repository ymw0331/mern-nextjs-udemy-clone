import { useState, useEffect } from 'react';
import { Menu } from 'antd';
import Link from 'next/Link';
import { AppstoreOutlined, LoginOutlined, UserAddOutlined } from "@ant-design/icons";


const { Item } = Menu;

const TopNav = () =>
{

  const[current , ]
  return (
    <>
      <Menu mode="horizontal">
        <Item icon={ <AppstoreOutlined /> }>
          <Link href="/" className='text-decoration-none'>
            App
          </Link>
        </Item>

        <Item icon={ <LoginOutlined /> }>
          <Link href="/login" className='text-decoration-none'>
            Login
          </Link>
        </Item>

        <Item icon={ <UserAddOutlined /> }>
          <Link href="/register" className='text-decoration-none'>
            Register
          </Link>
        </Item>
      </Menu>
    </>
  );
};

export default TopNav;