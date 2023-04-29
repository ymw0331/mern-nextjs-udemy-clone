import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";
import Jumbotron from '../components/Jumbotron'

const Login = () => {
  const [email, setEmail] = useState("johnturner1212@gmail.com");
  const [password, setPassword] = useState("password");
  // const [ email, setEmail ] = useState( "ymw0331@hotmail.com" );
  // const [ password, setPassword ] = useState( "instructor" );
  const [loading, setLoading] = useState(false);

  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  // const { user } = state;

  // router
  const router = useRouter();

  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      // console.log("LOGIN RESPONSE", data);
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      // save in local storage
      window.localStorage.setItem("user", JSON.stringify(data));
      // redirect
      router.push("/user");
      // setLoading(false);
    } catch (err) {
      toast(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <Jumbotron title={"Login"} />
      {/* <h1 className="jumbotron text-center bg-primary square">Login</h1> */}

      <div className="container mt-4 col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />

          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />

          <button
            type="submit"
            className="col col-md-12 btn btn-block btn-primary"
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Logi In"}
          </button>
        </form>

        <div className="text-center p-3">
          Not yet registered?{" "}
          <Link href="/register" className='text-decoration-none'>
            Register
          </Link>
        </div>
        <div className="text-center text-danger text-decoration-none">
          <Link href="/forgot-password" className='text-decoration-none'>
            <p className='text-danger '>Forgot password</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
