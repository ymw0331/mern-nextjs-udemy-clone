import TopNav from '../coponents/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import "./styles.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp ( { Component, pageProps } )
{

  return (
    <>
      <ToastContainer></ToastContainer>
      <TopNav />
      <Component { ...pageProps } />
    </>
  );

}

export default MyApp;