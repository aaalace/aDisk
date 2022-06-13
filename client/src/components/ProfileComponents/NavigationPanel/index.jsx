import React from "react"
import './style.scss'
import { useMediaQuery } from "react-responsive"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faGear, faHeadset, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom"
import { NavPanelContainer } from "./styled"
import { FormattedMessage } from 'react-intl'

const NavigationPanel = (props) => {
    
    const Tablet = useMediaQuery({
        query: '(max-width: 1224px) and (min-width: 769px)'
    })
    
    return (
        <NavPanelContainer className="nav-panel-container">
            <div className="icon-contaner">
                <img alt='' src="../../favicon.ico"></img>
            </div>
            <div className="nav-panel">
                <div>
                    <NavLink to='/profile/account' className="nav-link"><FontAwesomeIcon className="icon" icon={faUserAstronaut} /><p><FormattedMessage id="prof_my_account"/></p></NavLink>
                    <NavLink to='/profile/settings' className="nav-link"><FontAwesomeIcon className="icon" icon={faGear} /><p><FormattedMessage id="prof_settings"/></p></NavLink>
                    <NavLink to='/profile/support' className="nav-link"><FontAwesomeIcon className="icon" icon={faHeadset} /><p><FormattedMessage id="prof_support"/></p></NavLink>
                </div>
                <Link className="home-link" to='/dashboard' style={ Tablet ? {fontSize: '18px'} : {} }><FontAwesomeIcon className="icon" icon={faArrowLeftLong}/><p><FormattedMessage id="prof_open_adisk"/></p></Link>
            </div>
        </NavPanelContainer>
    )
}


export default NavigationPanel