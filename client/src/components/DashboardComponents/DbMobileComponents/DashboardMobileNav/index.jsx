import React from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faUsers, faClock } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from "react-router-dom"

const DashboardMobileNav = () => {

    return (
        <div className="mobile-nav">
            <NavLink to='/dashboard/recent' className="nav-link"><FontAwesomeIcon className="icon" icon={faClock} /><p>Recent</p></NavLink>
            <NavLink to='/dashboard/files' className="nav-link"><FontAwesomeIcon className="icon" icon={faFile} /><p>Files</p></NavLink>
            <NavLink to='/dashboard/shared' className="nav-link"><FontAwesomeIcon className="icon" icon={faUsers} /><p>Shared</p></NavLink>
        </div>
    )
}


export default DashboardMobileNav