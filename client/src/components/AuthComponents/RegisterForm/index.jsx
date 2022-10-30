import React from "react"
import './style.scss'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { useState } from "react";
import { TermsAndConditions } from "../Terms";
import { register } from '../../../actions/auth'
import { useNavigate } from 'react-router-dom';
import CSRFToken from "../CSRFToken";
import { RegisterFormStyled } from "./styled";
import { FormattedMessage } from 'react-intl'

const RegisterForm = (props) => {
    const navigate = useNavigate();

    const [errorState, setErrorState] = useState('')
    const [termsState, setTermsState] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [checkBoxState, setCheckBoxState] = useState(false)

    let readyToSend = false
    if(email !== '' && username !== '' && password.length > 7 && rePassword.length > 7 && checkBoxState){
        readyToSend = true
    }

    const onSubmit = async e => {
        e.preventDefault()
        const res = await props.register(email, username, password, rePassword)
        if(res[0]){
            navigate('/login/entry')
            setUsername('')
            setPassword('')
            setEmail('')
            setRePassword('')
        }
        else{
            setErrorState(res[1])
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && readyToSend) {
            onSubmit(event)
        }
    }  

 
    return (
        <RegisterFormStyled className="register-form">
            {termsState ? <TermsAndConditions state={setTermsState}/> : null}
            <div className="register-form-header"/>
            <div className="register-form-container">
                <div className="page-info-container">
                    <h2 className="page-name"><FormattedMessage id='sign_up_name'/></h2>
                    <p className="page-comm"><FormattedMessage id='sign_desc'/></p>
                </div>
                <div className="register-types-container">
                    <button className="google-register"><img alt="" src="../images/google.png" className="google-img"></img><p><FormattedMessage id='sign_up_google_btn'/></p></button>
                    
                    <div className="custom-hr">
                        <div><FormattedMessage id='sign_or'/></div>
                        <hr></hr>
                    </div>

                    <form onSubmit={e => onSubmit(e)} onKeyDown={handleKeyDown}>
                        <CSRFToken/>
                        <div className="username-register">
                            <div className="username-line">
                                <p><FormattedMessage id='sign_up_email'/></p>
                                <input type='email' onChange={e => setEmail(e.target.value)} value={email}/>
                            </div>
                            <div className="username-line">
                                <p><FormattedMessage id='sign_username'/></p>
                                <input type='text' onChange={e => setUsername(e.target.value)} value={username}/>
                            </div>
                            <div className="username-line">
                                <p><FormattedMessage id='sign_password'/></p>
                                <input type='password' autoComplete='new-password' onChange={e => setPassword(e.target.value)} value={password}/>
                            </div>
                            <div className="username-line">
                                <p><FormattedMessage id='sign_up_rep_pass'/></p>
                                <input type='password' autoComplete='new-password' onChange={e => setRePassword(e.target.value)} value={rePassword}/>
                            </div>
                        </div>
                        
                        <div className="remember-container">
                            <input type="checkbox" value="terms" id="agreement" onChange={() => setCheckBoxState(!checkBoxState)}/>
                            <label htmlFor="terms"><FormattedMessage id='sign_up_agreement'/> <label onClick={() => setTermsState(true)} className="terms"><FormattedMessage id='sign_up_terms_link'/></label></label>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            {errorState ? <p style={{color: 'red', fontSize: '13px', bottom: '10px', position: 'relative'}}>{<FormattedMessage id={errorState}/>}</p> : ''}
                            <button type="submit" className="register-button" disabled={readyToSend ? false : true} style={readyToSend ? {backgroundImage: 'linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%)'}: {backgroundColor: '#7C7C7C'}}><FormattedMessage id='sign_up_button'/></button>
                        </div>
                    </form>

                    <div className="already-registered-container">
                        <div style={{display: 'flex'}}>
                            <p className="question"><FormattedMessage id='sign_up_question'/>&nbsp;&nbsp;</p>
                            <Link className="solution" to='/login/entry'><FormattedMessage id='sign_up_answer'/></Link>
                        </div>
                    </div>
                </div> 
            </div>           
        </RegisterFormStyled>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, {register})(RegisterForm)