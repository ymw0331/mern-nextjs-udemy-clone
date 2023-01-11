import { useEffect, useState } from 'react';
import Link from 'next/link';

const InstructorNav = () =>
{
  const [ current, setCurrent ] = useState( "" );

  useEffect( () =>
  {
    process.browser && setCurrent( window.location.pathname );
  }, [ process.browser && window.location.pathname ] );

  return (

    <div className='nav flex-column nav-pills mt-2'>
      <Link href="/instructor">
        <div
          className={ `text-decoration-none nav-link ${ current === "/instructor" && "active" }` }>
          Dashboard
        </div>
      </Link>

      <Link href="/instructor/course/create">
        <div
          className={ `text-underline-none nav-link ${ current === "/instructor/course/create" && "active" }` }>
          Course Create
        </div>
      </Link>


    </div>
  );
};


export default InstructorNav;