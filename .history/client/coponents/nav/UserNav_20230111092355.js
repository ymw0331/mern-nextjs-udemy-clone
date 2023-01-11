import { useEffect, useState } from 'react';
import Link from 'next/link';

const UserNav = () =>
{
  const [ current, setCurrent ] = useState( "" );

  useEffect( () =>
  {
    process.browser && setCurrent( window.location.pathname );
  }, [ process.browser && window.location.pathname ] );


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