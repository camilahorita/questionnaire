import React, { useState } from 'react';
import "./Login.css";
import axios from "axios";


function Login({setToken}) {

  let [username, setUserName] = useState();
  let [password, setPassword] = useState();

  function loginUser() {
    axios
  
    .post("http://localhost:9090/api/login/login", {"username": username, "password": password})
  
    .then(function (response) {
  
  
      let resp = response;
      setToken(resp);
      console.log(resp);
  
    })
  
    .catch(function (error) {
  
      // handle error
  
      console.log(error);
  
    })
  }

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
                <input type="button" value="Sign In" className="btn btn-primary" onClick={() => loginUser()}/>
        </form>
      </div>
    );
  }
  export default Login;


  