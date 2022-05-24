import React from "react"
import './style.scss'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from "../../actions/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import CSRFToken from "../CSRFToken";
import { LoginFormStyled } from "./styled";

const LoginForm = (props) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async e => {
        e.preventDefault()

        const res = await props.login(username, password)
        if(res){
            navigate('/dashboard')
        }
        else{
            loginErrorStaff()
        }
        setUsername('')
        setPassword('')
    }

    const loginErrorStaff = () => {

    }

    return (
      <LoginFormStyled className="login-form">
        <div className="login-form-header"/>
        <div className="login-form-container">
            <div className="page-info-container">
                <h2 className="page-name">Sign in</h2>
                <p className="page-comm">Save your files in a safe place!</p>
            </div>
            <div className="login-types-container">
                <button className="google-sign-in"><img alt="" src="../images/google.png" className="google-img"></img> Sign in with Google</button>
                
                <div className="custom-hr">
                    <p>or Sign in with Username</p>
                </div>
                <form onSubmit={e => onSubmit(e)}>
                    <CSRFToken/>
                    <div className="username-sign-in">
                        <div className="username-line">
                            <p>Username</p>
                            <input type='text' onChange={e => setUsername(e.target.value)} value={username}/>
                        </div>
                        <div className="username-line">
                            <p>Password</p>
                            <input type='password' onChange={e => setPassword(e.target.value)} value={password}/>
                        </div>
                    </div>
                    <button type="submit" className="sign-in-button">Sign in</button>
                </form>

                <div className="not-registered-container">
                    <p className="question">Not registered yet?&nbsp;&nbsp;</p>
                    <Link className="solution" to='/register'>Create an account</Link>
                </div>
            </div>
        </div>
        <div className="rights">
            &#169; 2022 aDisk. All rights reserved | aDisk
        </div>            
      </LoginFormStyled>
    );
}

export default connect(null, {login})(LoginForm)
