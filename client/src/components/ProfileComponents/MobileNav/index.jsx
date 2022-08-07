import React from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faGear, faHeadset, faHome } from '@fortawesome/free-solid-svg-icons'

import { NavLink, Link } from "react-router-dom"

const MobileNav = () => {

    return (
        <div className="mobile-nav">
            <NavLink to='/profile/account' className="nav-link"><FontAwesomeIcon className="icon" icon={faUserAstronaut} /><p>Account</p></NavLink>
            <NavLink to='/profile/settings' className="nav-link"><FontAwesomeIcon className="icon" icon={faGear} /><p>Settings</p></NavLink>
            <NavLink to='/profile/support' className="nav-link"><FontAwesomeIcon className="icon" icon={faHeadset} /><p>Support</p></NavLink>
        </div>
    )
}


export default MobileNav