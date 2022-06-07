import React, { useEffect } from "react"
import './style.scss'
import { connect } from "react-redux";
import { RegisterContainer, RegisterPage } from "./styled";

import RegisterForm from "../../components/AuthComponents/RegisterForm";
import AdvantagesCarousel from "../../components/AuthComponents/AdvantagesCarousel";

const Register = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <RegisterPage className="register-page">
            <RegisterContainer className="register-container">
                <AdvantagesCarousel currentLocale={props.currentLocale} handleChange={props.handleChange}/>
                <RegisterForm />
            </RegisterContainer>
        </RegisterPage>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(Register)