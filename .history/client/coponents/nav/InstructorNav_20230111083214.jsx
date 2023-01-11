import Link from 'next/link';

const InstructorNav = () =>
{
  return (
    <div className='nav flex-column nav-pills mt-2'>
      <Link href="/user">

        <div className='nav-link active'>
          InstructorNavDashboard
        </div>
      </Link>

    </div>
  );
};


export default InstructorNav;