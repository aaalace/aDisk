import React from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faGear, faHeadset, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom"

const NavigationPanel = (props) => {
    
    
    return (
        <div className="nav-panel-container">
            <div className="icon-contaner">
                <img src="../../favicon.ico"></img>
            </div>
            <div className="nav-panel">
                <div>
                    <NavLink to='/profile/account' className="nav-link"><FontAwesomeIcon className="icon" icon={faUserAstronaut} /><p>My account</p></NavLink>
                    <NavLink to='/profile/settings' className="nav-link"><FontAwesomeIcon className="icon" icon={faGear} /><p>Settings</p></NavLink>
                    <NavLink to='/profile/support' className="nav-link"><FontAwesomeIcon className="icon" icon={faHeadset} /><p>Support</p></NavLink>
                </div>
                <Link className="home-link" to='/dashboard'><FontAwesomeIcon className="icon" icon={faArrowLeftLong} /><p>Open aDisk</p></Link>
            </div>
        </div>
    )
}


export default NavigationPanel