import React from "react"
import './style.scss'
import RegisterForm from "../../components/RegisterForm";
import AdvantagesCarousel from "../../components/AdvantagesCarousel";
import { connect } from "react-redux";
import { RegisterContainer } from "./styled";
import { useMediaQuery } from 'react-responsive'

const Register = (props) => {
    const Desktop = useMediaQuery({
        query: '(min-width: 1000px)'
    })
    const Mobile = useMediaQuery({
        query: '(max-width: 1000px)'
    })

    return (
        <div className="register-page">
            <RegisterContainer className="register-container">
                {Mobile ? <AdvantagesCarousel/> : null}
                <RegisterForm/>
                {Desktop ? <AdvantagesCarousel/> : null}
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