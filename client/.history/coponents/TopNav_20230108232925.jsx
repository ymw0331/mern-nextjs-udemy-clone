import { Menu } from 'antd';
import Link from 'next/Link';

const { Item } = Menu;

const TopNav = () =>
{
  return (
    <>
      <Menu>
        <Item>
          <Link href="/" className='text-decoration-none'>
            App
          </Link>
        </Item>

        <Item>
          <Link href="/login">
            Login
          </Link>
        </Item>

        <Item>
          <Link href="/register">
            Register
          </Link>
        </Item>
      </Menu>
    </>
  );
};

export default TopNav;