import { Menu } from 'antd';
import Link from 'next/Link';
import { AppstoreAddOutlined} from "@ant-design/icons";


const { Item } = Menu;

const TopNav = () =>
{
  return (
    <>
      <Menu mode="horizontal">
        <Item>
          <Link href="/" className='text-decoration-none'>
            App
          </Link>
        </Item>

        <Item>
          <Link href="/login" className='text-decoration-none'>
            Login
          </Link>
        </Item>

        <Item>
          <Link href="/register" className='text-decoration-none'>
            Register
          </Link>
        </Item>
      </Menu>
    </>
  );
};

export default TopNav;