import React from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faGear, faHeadset, faPen, faCheck } from '@fortawesome/free-solid-svg-icons'

import { Link, NavLink } from "react-router-dom"

const MobileNav = (props) => {

    return (
        <div className="mobile-nav">
        <NavLink to='/profile/account' className="nav-link"><FontAwesomeIcon className="icon" icon={faUserAstronaut} /></NavLink>
        <NavLink to='/profile/settings' className="nav-link"><FontAwesomeIcon className="icon" icon={faGear} /></NavLink>
        <NavLink to='/profile/support' className="nav-link"><FontAwesomeIcon className="icon" icon={faHeadset} /></NavLink>
    </div>
    )
}


export default MobileNav