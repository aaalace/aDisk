import React from "react"
import './style.scss'
import { Link } from 'react-router-dom';

export const LoginForm = () => {

    return (
      <div className="login-form">
        <div className="login-form-container">
            <div className="page-info-container">
                <h2 className="page-name">Login</h2>
                <p className="page-comm">Save your files in a safe place!</p>
            </div>
            
            <div className="login-types-container">
                <button className="google-sign-in"><img alt="" src="../images/google.png" className="google-img"></img> Sign in with Google</button>
                
                <div className="custom-hr">
                    <p>or Sign in with Username</p>
                </div>
                
                <div className="username-sign-in">
                    <div className="username-line">
                        <p>Username</p>
                        <input type='text'/>
                    </div>
                    <div className="username-line">
                        <p>Password</p>
                        <input type='password'/>
                    </div>
                
                </div>
                
                <div className="remember-container">
                    <input type="checkbox" value="lsRememberMe"/>
                    <label for="rememberMe">Remember me</label>
                </div>
                
                <button className="sign-in-button">Login</button>

                <div className="not-registered-container">
                    <p className="question">Not registered yet?&nbsp;&nbsp;</p>
                    <Link className="solution" to='/register'>Create an account</Link>
                </div>
            </div>
        </div>            
      </div>
    );
}
