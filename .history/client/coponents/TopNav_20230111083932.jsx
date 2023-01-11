import { useState, useEffect, useContext } from 'react';
import { Menu } from 'antd';
import Link from 'next/Link';
import { AppstoreOutlined, CoffeeOutlined, LoginOutlined, UserAddOutlined, CarryOutOutlined, TeamOutlined } from "@ant-design/icons";
import { Context } from '../context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const { Item, SubMenu, ItemGroup } = Menu;

const TopNav = () =>
{
  const [ current, setCurrent ] = useState( "" );

  const { state, dispatch } = useContext( Context );
  const { user } = state;

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
      <Menu
        className='mb-2'
        style={ { display: 'block' } }

        mode="horizontal"
        selectedKeys={ [ current ] } >
        <Item
          key="/"
          onClick={ e => setCurrent( e.key ) }
          icon={ <AppstoreOutlined /> }>
          <Link href="/" className='text-decoration-none'>
            App
          </Link>
        </Item>

        { user && user.role && user.role.includes( "Instructor" )
          ?
          (
            <Item
              key="/instructor/course/create"
              onClick={ e => setCurrent( e.key ) }
              icon={ <CarryOutOutlined /> }>

              <Link
                href="/instructor/course/create"
                className='text-decoration-none'>
                Create Course
              </Link>

            </Item>
          )
          :
          (
            <Item
              key="/user/become-instructor"
              onClick={ e => setCurrent( e.key ) }
              icon={ <TeamOutlined /> }>
              <Link
                href="/user/become-instructor"
                className='text-decoration-none'>
                Become Instructor
              </Link>
            </Item>
          )
        }

        {
          user === null && (
            <>
              <Item
                className='float-end'
                key="/login"
                onClick={ e => setCurrent( e.key ) }
                icon={ <LoginOutlined /> }>
                <Link href="/login" className='text-decoration-none'>
                  Login
                </Link>
              </Item>

              <Item
                className='float-end'
                key="/register"
                onClick={ e => setCurrent( e.key ) }
                icon={ <UserAddOutlined /> }>
                <Link href="/register" className='text-decoration-none'>
                  Register
                </Link>
              </Item>
            </>
          )
        }

        { user !== null && (
          <div className='float-end'>
            <SubMenu
              icon={ <CoffeeOutlined /> }
              title={ user && user.name.toUpperCase() }>
              <ItemGroup>
                <Item key='/user'>
                  <Link
                    className='text-decoration-none'
                    href="/user">
                    Dashboard
                  </Link>
                </Item>

                <Item onClick={ logout } >
                  Logout
                </Item>

              </ItemGroup>
            </SubMenu>
          </div>
        ) }

        { user && user.role && user.role.includes( "Instructor" ) && (
          <Item
            key="/instructor"
            onClick={ ( e ) => setCurrent( e.key ) }
            icon={ <TeamOutlined /> }
            className="float-right"
          >
            <Link href="/instructor">
              Instructor
            </Link>
          </Item>
        ) }

      </Menu>
    </>
  );
};

export default TopNav;