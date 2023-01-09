const express = require( 'express' );
const next = require( 'next' );
const { createProxyMiddle } = require( "http-proxy-middleware" );


const dev = process.env.NODE_ENV !== "production";
const app = next( { dev } );
