import Link from 'next/link';

const InstructorNav = () =>
{

  const [ current, setCurrent ] = useState( "" );

  useEffect( () =>
  {
    process.browser && setCurrent( window.location.pathname );
    // console.log( window.location.pathname );
  }, [ process.browser && window.location.pathname ] );

  return (
    <div className='nav flex-column nav-pills mt-2'>

      <Link href="/instructor">
        <div className='nav-link '>
          Dashboard
        </div>
      </Link>

      <Link href="/instructor/course/create">
        <div className='nav-link '>
          Course Create
        </div>
      </Link>


    </div>
  );
};


export default InstructorNav;