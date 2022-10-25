import React, { useState } from 'react';
import "./Login.css";
import PropTypes from 'prop-types';
import axios from "axios";


async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Login({setToken}) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

    return (
      <div className="signinbox">
        <form>
            <legend> Sign In</legend>
            <div className= "inputLogin">
                <label htmlFor ="username">Email</label>
                <input className="form-control" type="text" id="username" name="username"  placeholder="Username" onChange={e => setUserName(e.target.value)} required />
            </div>
            <div className= "inputLogin">
                <label htmlFor ="password">Password</label>
                <input className="form-control" type="password" id="password" name="password"  placeholder="Password" onChange={e => setPassword(e.target.value)} required />
            </div>
                <input type="submit" value="Sign In" className="btn btn-primary"/>
        </form>
      </div>
    );
  }
  export default Login;

  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
  