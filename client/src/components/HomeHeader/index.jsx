import React from "react"
import './style.scss'

export const HomeHeader = () => {

    return (
        <div className="home-header">
            <div className="home-header_row">
                <p className="icon">aDisk</p>
                <button type="button" className="home-header_sign-in"><i class='fas fa-user-alt'></i>&nbsp;&nbsp;Sign in</button>
            </div>
        </div>
    )
}