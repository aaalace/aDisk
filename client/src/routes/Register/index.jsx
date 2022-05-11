import React from "react"
import './style.scss'
import { RegisterForm } from "../../components/RegisterForm";
import { AdvantagesCarousel } from "../../components/AdvantagesCarousel";

export const Register = () => {

    return (
      <div className="register-page">
          <div className="register-container">
            <RegisterForm/>
            <AdvantagesCarousel/>
          </div>
      </div>
    );
}
