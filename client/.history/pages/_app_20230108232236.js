import TopNav from '../coponents/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import "./styles.css";

function MyApp ( { Component, pageProps } )
{

  return (
    <>
      <TopNav />
      <Component { ...pageProps } />


    </>
  );

}

export default MyApp;