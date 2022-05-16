import React from "react"
import './style.scss'
import { useNavigate } from "react-router-dom"

export const HomeHeader = () => {
    const navigate = useNavigate()
    
    return (
        <div className="home-header">
            <div className="home-header_row">
                <p className="icon">aDisk</p>
                <button onClick={() => navigate('/login')} type="button" className="home-header_sign-in"><i class='fas fa-user-alt'></i>&nbsp;&nbsp;Sign in</button>
            </div>
        </div>
    )
}