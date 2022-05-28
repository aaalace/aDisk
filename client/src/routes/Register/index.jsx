import React, { useEffect } from "react"
import './style.scss'
import RegisterForm from "../../components/RegisterForm";
import AdvantagesCarousel from "../../components/AdvantagesCarousel";
import { connect } from "react-redux";
import { RegisterContainer } from "./styled";

const Register = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="register-page">
            <RegisterContainer className="register-container">
                <AdvantagesCarousel currentLocale={props.currentLocale} handleChange={props.handleChange}/>
                <RegisterForm />
            </RegisterContainer>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(Register)