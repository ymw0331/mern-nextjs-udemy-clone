import TopNav from '../coponents/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import "./styles.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  } from "../context";

function MyApp ( { Component, pageProps } )
{
  return (
    <>
      <ToastContainer position='top-center' />
      <TopNav />
      <Component { ...pageProps } />
    </>
  );
}

export default MyApp;