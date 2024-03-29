import Jumbotron from "../Jumbotron"
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import { SyncOutlined } from '@ant-design/icons';
import UserNav from '../nav/UserNav';

const UserRoute = ({ children }) => {
  // state
  const [ok, setOk] = useState(true);
  //route
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/current-user");
      // console.log( data );
      if (data.ok)
        setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push('/login');
    }
  };
  return (
    <>
      {!ok ?
        <SyncOutlined
          spin
          className='d-slex justify-content display-1 text-primary p-5'
        />
        :
        (
          < div className='container-fluid'>
            <div className='row'>
              {/* User side bar */}
              <div className='col-md-2'>
                <UserNav />
              </div>
              <div className='col-md-10'>
                {children}
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default UserRoute;
