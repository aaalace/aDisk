import React, { useEffect } from "react"
import './style.scss'
import { connect } from "react-redux";
import { LoginContainer, LoginPage } from "./styled";
import { useMediaQuery } from 'react-responsive'
import { useParams } from "react-router-dom";

import AdvantagesCarousel from "../../components/AuthComponents/AdvantagesCarousel";
import LoginForm from "../../components/AuthComponents/LoginForm";
import RecoverPassword from "../../components/AuthComponents/RecoverPassword";

const Login = (props) => {

    const page = useParams().page

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const Desktop = useMediaQuery({
        query: '(min-width: 1000px)'
    })
    const Mobile = useMediaQuery({
        query: '(max-width: 1000px)'
    })

    const switchPage = (page) => {
        switch (page) {
            case 'entry':
                return <LoginForm />
            case 'reset':
                return <RecoverPassword currentLocale={props.currentLocale}/>
            default:
                return <LoginForm />
        }
    }

    return (
        <LoginPage className="login-page">
            <LoginContainer className="login-container">
                {Mobile ? <AdvantagesCarousel currentLocale={props.currentLocale} handleChange={props.handleChange}/> : null}
                {switchPage(page)}
                {Desktop ? <AdvantagesCarousel currentLocale={props.currentLocale} handleChange={props.handleChange}/> : null}
            </LoginContainer>
        </LoginPage>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(Login)