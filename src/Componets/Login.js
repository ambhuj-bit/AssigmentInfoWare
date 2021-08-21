import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-main">
      <div class="login-container">
        <h1>Login </h1>
          <from >
            
			<div className="lable">
              <lable><i class="fas fa-envelope"></i></lable>
			  <input type="text" placeholder="Email Address " required />
            </div>

			<div className="lable">
              <lable><i class="fas fa-lock"></i></lable>
              <input type="password" required placeholder="Password" />
            </div>
			<div className="lable">
              <a href="#" className="Link-login">Forget password</a>
            </div>
			<div className="lable">
              <button>Login</button>
            </div>
            <div className="no-account">

			<Link to="/Home/login/register" className="Link-login">New to Infoware ? Create an acoount</Link>
			</div>
			
          </from>
        </div>
      </div>
   
  );
}

export default Login;
