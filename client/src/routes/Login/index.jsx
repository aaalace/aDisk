import React from "react"
import './style.scss'
import AdvantagesCarousel from "../../components/AdvantagesCarousel";
import LoginForm from "../../components/LoginForm";

const Login = (props) => {

    return (
        <div className="login-page" style={props.responsive ? {} : {backgroundColor: 'rgb(249, 248, 248)'}}>
            {props.responsive ? 
            <div className="login-container">
                <LoginForm responsive={props.responsive}/>
            </div>
            :
            <div className="login-container">
                <LoginForm responsive={props.responsive}/>
                <AdvantagesCarousel/>
            </div>
            }
        </div>
    );
}

export default Login