import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Component } from 'react';

function MyApp ( { Component, pageProps } )
{
  return <Component{ ...pageProps } />;
}