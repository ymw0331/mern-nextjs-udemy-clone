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
            <a>App</a>
          </Link>
        </Item>

        <Item>
          <Link href="/login">
            <a>App</a>
          </Link>
        </Item>
      </Menu>
    </>
  );
};

export default TopNav;