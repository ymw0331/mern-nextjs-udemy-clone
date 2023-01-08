import { Menu } from 'antd';
import Link from 'next/Link';

const { Item } = Menu;

const TopNav = () =>
{
  return (
    <>
      <Menu>
        <Item>
          <Link href="/">
           App
          </Link>
        </Item>

        <Item>
          <Link href="/login">
            Login</a>
          </Link>
        </Item>

        <Item>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </Item>
      </Menu>
    </>
  );
};

export default TopNav;