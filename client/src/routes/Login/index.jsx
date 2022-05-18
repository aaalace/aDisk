import React from "react"
import './style.scss'
import AdvantagesCarousel from "../../components/AdvantagesCarousel";
import LoginForm from "../../components/LoginForm";
import { connect } from "react-redux";
import { LoginContainer } from "./styled";
import { useMediaQuery } from 'react-responsive'

const Login = (props) => {
    const Desktop = useMediaQuery({
        query: '(min-width: 1000px)'
    })
    const Mobile = useMediaQuery({
        query: '(max-width: 1000px)'
    })

    return (
        <div className="login-page">
            <LoginContainer className="login-container">
                {Mobile ? <AdvantagesCarousel/> : null}
                <LoginForm/>
                {Desktop ? <AdvantagesCarousel/> : null}
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