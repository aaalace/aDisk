import React from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faImages, faClock, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

import { NavLink, Link } from "react-router-dom"

const DashboardMobileNav = () => {

    return (
        <div className="mobile-nav">
            <NavLink to='/dashboard/recent' className="nav-link"><FontAwesomeIcon className="icon" icon={faClock} /></NavLink>
            <NavLink to='/dashboard/files' className="nav-link"><FontAwesomeIcon className="icon" icon={faFile} /></NavLink>
            <NavLink to='/dashboard/images' className="nav-link"><FontAwesomeIcon className="icon" icon={faImages} /></NavLink>
        </div>
    )
}


export default DashboardMobileNav