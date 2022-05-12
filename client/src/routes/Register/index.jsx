import React from "react"
import './style.scss'
import RegisterForm from "../../components/RegisterForm";
import AdvantagesCarousel from "../../components/AdvantagesCarousel";

const Register = (props) => {

    return (
        <div className="register-page" style={props.responsive ? {} : {backgroundColor: 'rgb(249, 248, 248)'}}>
        {props.responsive ? 
            <div className="register-container">
                <RegisterForm responsive={props.responsive}/>
            </div>
            :
            <div className="register-container">
                <RegisterForm responsive={props.responsive}/>
                <AdvantagesCarousel responsive={props.responsive}/>
          </div>
        }
      </div>
    );
}

export default Register