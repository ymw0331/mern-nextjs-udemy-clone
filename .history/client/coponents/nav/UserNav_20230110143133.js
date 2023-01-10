import Link from 'next/link';

const UserNav = () =>
{
  return (
    <div className='nav flex-column nav-pills mt-2'>
      <Link href="/user">
        dashboard
      </Link>

    </div>
  );
};


export default UserNav;