import React, { useEffect } from "react"
import './style.scss'
import { connect } from "react-redux";
import { LoginContainer } from "./styled";
import { useMediaQuery } from 'react-responsive'

import AdvantagesCarousel from "../../components/AuthComponents/AdvantagesCarousel";
import LoginForm from "../../components/AuthComponents/LoginForm";

const Login = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const Desktop = useMediaQuery({
        query: '(min-width: 1000px)'
    })
    const Mobile = useMediaQuery({
        query: '(max-width: 1000px)'
    })

    return (
        <div className="login-page">
            <LoginContainer className="login-container">
                {Mobile ? <AdvantagesCarousel currentLocale={props.currentLocale} handleChange={props.handleChange}/> : null}
                <LoginForm />
                {Desktop ? <AdvantagesCarousel currentLocale={props.currentLocale} handleChange={props.handleChange}/> : null}
            </LoginContainer>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(Login)