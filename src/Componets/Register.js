import React from 'react'
import "./Login.css";
import { Link } from "react-router-dom";

function Register() {
	return (
		<div className="login-main">
		<div class="login-container">
		  <h1>Register </h1>
			<from >
			  <div className="lable">
				<lable><i class="fas fa-user"></i></lable>
				<input type="text" placeholder="Username" required/>
			  </div>
  
			  <div className="lable">
				<lable><i class="fas fa-envelope"></i></lable>
				<input type="text" placeholder="Email Address" required />
			  </div>
  
			  <div className="lable">
				<lable><i class="fas fa-lock"></i></lable>
				<input type="password" required placeholder="Password" />
			  </div>
			  
			  <div className="lable">
				<lable><i class="fas fa-lock"></i></lable>
				<input type="password" required placeholder=" Confirm Password" />
			  </div>
			  
			  <div className="lable">
				<button>Register</button>
			  </div>
			  <div className="no-account">
			  <Link to="/Home/login"  className="Link-login" >Already have an acoount ? Login</Link>
			  </div>
			  
			</from>
		  </div>
		</div>
	 
	);
  }
  
	

export default Register
