import React from "react"
import './style.scss'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from "../../../actions/auth";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import CSRFToken from "../CSRFToken";
import { LoginFormStyled } from "./styled";
import { FormattedMessage } from 'react-intl'

const LoginForm = (props) => {
    const navigate = useNavigate();

    const [errorState, setErrorState] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async e => {
        e.preventDefault()

        const res = await props.login(username, password)
        if(res[0]){
            navigate('/dashboard')
            setUsername('')
            setPassword('')
        }
        else{
            setErrorState(res[1])
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSubmit(event)
        }
    }    

    return (
      <LoginFormStyled className="login-form">
        <div className="recover-password" >
            <div></div>
        </div>
        <div className="login-form-container" >
            <div className="page-info-container">
                <h2 className="page-name"><FormattedMessage id='sign_in_name'/></h2>
                <p className="page-comm"><FormattedMessage id='sign_desc'/></p>
            </div>
            <div className="login-types-container">
                <button className="google-sign-in"><img alt="" src="../images/google.png" className="google-img"></img><p><FormattedMessage id='sign_in_google_btn'/></p></button>
                
                <div className="custom-hr">
                    <div><FormattedMessage id='sign_or'/></div>
                    <hr></hr>
                </div>

                <form onSubmit={e => onSubmit(e)} onKeyDown={handleKeyDown}>
                    <CSRFToken/>
                    <div className="username-sign-in">
                        <div className="username-line">
                            <p><FormattedMessage id='sign_username'/></p>
                            <input type='text' onChange={e => setUsername(e.target.value)} value={username}/>
                        </div>
                        <div className="username-line">
                            <p><FormattedMessage id='sign_password'/></p>
                            <input type='password' onChange={e => setPassword(e.target.value)} value={password}/>
                        </div>
                        <div className="username-line" onClick={() => navigate('/login/reset')}><p className="forget-pass">Forgot your password?</p></div>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        {errorState ? <p style={{color: 'red', fontSize: '13px', bottom: '10px', position: 'relative'}}>{<FormattedMessage id={errorState}/>}</p> : ''}
                        <button type="submit" className="sign-in-button"><FormattedMessage id='sign_in_button'/></button>
                    </div>
                </form>

                <div className="not-registered-container">
                    <p className="question"><FormattedMessage id='sign_in_question'/>&nbsp;&nbsp;</p>
                    <Link className="solution" to='/register'><FormattedMessage id='sign_in_answer'/></Link>
                </div>
            </div>
        </div>
      </LoginFormStyled>
    );
}

export default connect(null, {login})(LoginForm)
