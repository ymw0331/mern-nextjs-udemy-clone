import { useEffect, useState } from 'react';
import Link from 'next/link';

const UserNav = () =>
{
  return (
    <div className='nav flex-column nav-pills mt-2'>
      <Link href="/user">

        <div className='nav-link active'>
          Dashboard
        </div>
      </Link>

    </div>
  );
};


export default UserNav;