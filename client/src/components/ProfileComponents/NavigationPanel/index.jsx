import React from "react"
import './style.scss'
import { useMediaQuery } from "react-responsive"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faGear, faHeadset, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom"
import { NavPanelContainer } from "./styled"

const NavigationPanel = (props) => {
    
    const Tablet = useMediaQuery({
        query: '(max-width: 1224px) and (min-width: 769px)'
    })
    
    return (
        <NavPanelContainer className="nav-panel-container">
            <div className="icon-contaner">
                <img src="../../favicon.ico"></img>
            </div>
            <div className="nav-panel">
                <div>
                    <NavLink to='/profile/account' className="nav-link"><FontAwesomeIcon className="icon" icon={faUserAstronaut} /><p>My account</p></NavLink>
                    <NavLink to='/profile/settings' className="nav-link"><FontAwesomeIcon className="icon" icon={faGear} /><p>Settings</p></NavLink>
                    <NavLink to='/profile/support' className="nav-link"><FontAwesomeIcon className="icon" icon={faHeadset} /><p>Support</p></NavLink>
                </div>
                <Link className="home-link" to='/dashboard' style={ Tablet ? {fontSize: '18px'} : {} }><FontAwesomeIcon className="icon" icon={faArrowLeftLong} /><p>Open aDisk</p></Link>
            </div>
        </NavPanelContainer>
    )
}


export default NavigationPanel