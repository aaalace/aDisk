import React from "react"
import './style.scss'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { useState, useEffect } from "react";
import { TermsAndConditions } from "../Terms";
import { register } from '../../actions/auth'
import { useNavigate } from 'react-router-dom';
import CSRFToken from "../CSRFToken";

const MobileRegisterHeader = () => {
    return(
        <div className="mobile-register-header">
            <p>Create Account</p>
        </div>
    )
}

const RegisterForm = (props) => {
    const navigate = useNavigate();

    const [termsState, setTermsState] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    useEffect(() => {
        if(props.isAuthenticated){
            navigate('/dashboard')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let readyToSend = false
    if(email !== '' && username !== '' && password.length > 7 && rePassword.length > 7){
        readyToSend = true
    }

    const onSubmit = async e => {
        e.preventDefault()
        const res = await props.register(email, username, password, rePassword)
        if(res){
            navigate('/login')
        }
        else{
            registerErrorStaff()
        }
        setUsername('')
        setPassword('')
        setEmail('')
        setRePassword('')
    }

    const registerErrorStaff = () => {
        
    }
 
    return (
      <div className="register-form" style={props.responsive ? {width: '100vw', height: '100vh'} : {width: '25vw', borderRadius: '20px 0 0 20px', justifyContent: "center"}}>
        {termsState ? <TermsAndConditions state={setTermsState}/> : null}
        {props.responsive ?
            <MobileRegisterHeader/>
        :
        null}
        <div className="register-form-container">
            {props.responsive ?
            null
            :
            <div className="page-info-container">
                <h2 className="page-name">Sign Up</h2>
                <p className="page-comm">Save your files in a safe place!</p>
            </div>}
            
            <div className="register-types-container">
                <button className="google-register"><img alt="" src="../images/google.png" className="google-img"></img>Sign up with Google</button>
                
                <div className="custom-hr">
                    <p>or Sign up with Email</p>
                </div>
                <form onSubmit={e => onSubmit(e)}>
                    <CSRFToken/>
                    <div className="username-register">
                        <div className="username-line">
                            <p>Email</p>
                            <input type='email' onChange={e => setEmail(e.target.value)} value={email}/>
                        </div>
                        <div className="username-line">
                            <p>Username</p>
                            <input type='text' onChange={e => setUsername(e.target.value)} value={username}/>
                        </div>
                        <div className="username-line">
                            <p>Password</p>
                            <input type='password' autoComplete='new-password' onChange={e => setPassword(e.target.value)} value={password}/>
                        </div>
                        <div className="username-line">
                            <p>Repeated password</p>
                            <input type='password' autoComplete='new-password' onChange={e => setRePassword(e.target.value)} value={rePassword}/>
                        </div>
                    </div>
                    
                    <div className="remember-container">
                        <input type="checkbox" value="terms"/>
                        <label htmlFor="terms">I agree to the <i onClick={() => setTermsState(true)} className="terms">Terms & Conditions</i></label>
                    </div>
                    
                    <button type="submit" className="register-button" disabled={readyToSend ? false : true} style={readyToSend ? {backgroundColor: '#9C68F0'}: {backgroundColor: '#7C7C7C'}}>Sign Up</button>
                </form>

                <div className="already-registered-container">
                    <p className="question">Already have an account?&nbsp;&nbsp;</p>
                    <Link className="solution" to='/login'>Sign in</Link>
                </div>
            </div>
        </div>            
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, {register})(RegisterForm)