import { Menu } from 'antd';
import Link from 'next/Link';

const { Item } = Menu;

const TopNav = () =>
{
  return (
    <>
      <Menu>
        <Item>
          <Link legacyBehavior href="/">
            <a>App</a>
          </Link>
        </Item>

        <Item>
          <Link legacyBehavior href="/login">
            <a>Login</a>
          </Link>
        </Item>

        <Item>
          <Link legacyBehavior href="/register">
            <a>Register</a>
          </Link>
        </Item>
      </Menu>
    </>
  );
};

export default TopNav;