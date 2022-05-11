import React from "react"
import './style.scss'
import { Link } from 'react-router-dom';

export const RegisterForm = () => {

    return (
      <div className="register-form">
        <div className="register-form-container">
            <div className="page-info-container">
                <h2 className="page-name">Sign Up</h2>
                <p className="page-comm">Save your files in a safe place!</p>
            </div>
            
            <div className="register-types-container">
                <button className="google-register"><img alt="" src="../images/google.png" className="google-img"></img>Sign up with Google</button>
                
                <div className="custom-hr">
                    <p>or Sign up with Email</p>
                </div>
                
                <div className="username-register">
                    <div className="username-line">
                        <p>Email</p>
                        <input type='email'/>
                    </div>
                    <div className="username-line">
                        <p>Username</p>
                        <input type='text' autoComplete='new-password'/>
                    </div>
                    <div className="username-line">
                        <p>Password</p>
                        <input type='password' autoComplete='new-password'/>
                    </div>
                    <div className="username-line">
                        <p>Repeated password</p>
                        <input type='password' autoComplete='new-password'/>
                    </div>
                </div>
                
                <div className="remember-container">
                    <input type="checkbox" value="terms"/>
                    <label for="terms">I agree to the <a className="terms">Terms and Conditions</a></label>
                </div>
                
                <button className="register-button">Sign Up</button>

                <div className="already-registered-container">
                    <p className="question">Already have an account?&nbsp;&nbsp;</p>
                    <Link className="solution" to='/login'>Sign in</Link>
                </div>
            </div>
        </div>            
      </div>
    );
}
