import React from "react"
import './style.scss'
import { AdvantagesCarousel } from "../../components/AdvantagesCarousel";
import { LoginForm } from "../../components/LoginForm";

export const Login = () => {

    return (
        <div className="login-page">
            <div className="login-container">
                <LoginForm/>
                <AdvantagesCarousel/>
            </div>
        </div>
    );
}