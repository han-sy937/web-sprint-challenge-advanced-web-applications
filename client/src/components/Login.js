import React, {useState} from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const initialValue = {
  credentials: {
    username: "Lambda School",
    password: "i<3Lambd4"
  }
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [state, setState] = useState(initialValue)
  const history = useHistory()

  const handleChange = (e) => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", state.credentials)
      .then(res => {
        // console.log(res)
        localStorage.setItem("token", res.data.payload)
        history.push("/bubble-page")
      })
      .catch(err => {
        console.log(err)
      })
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
                    <input
                        type="text"
                        name="username"
                        value={state.credentials.username}
                        onChange={handleChange}
                        />

                    <input
                        type="password"
                        name="password"
                        value={state.credentials.password}
                        onChange={handleChange}
                        />
                    <button>Log In</button>
                </form>
    </>
  );
};

export default Login;
