import Jumbotron from '../coponents/Jumbotron';
import "../public/css/index.css";

export default function Index () 
{
  return (
    <>
      <Jumbotron title={ "Hello World" } />

      <p>from next js...</p>
    </>
  );
};