import React, { useState } from "react"
import './style.scss'
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { FormattedMessage } from 'react-intl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faCloud, faArrowLeftLong, faAngleDown, faArrowRightFromBracket, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import StorageBar from "../StorageBar"
import { logout } from "../../../actions/auth"

const MobileProfile = (props) => {

    const navigate = useNavigate()

    const [openedHeaderMenu, setOpenedHeaderMenu] = useState(false)
    
    const months = {
        '01': 'january',
        '02': 'february',
        '03': 'march',
        '04': 'april',
        '05': 'may',
        '06': 'june',
        '07': 'july',
        '08': 'august',
        '09': 'september',
        '10': 'october',
        '11': 'november',
        '12': 'december',
    }

    const [headerBgId, setHeaderBgId] = useState(0)

    const remakeDateJoined = (date) => {
        return <><FormattedMessage id='prof_since'/>&nbsp;{date.split('-')[2]}&nbsp;<FormattedMessage id={months[date.split('-')[1]]}/>&nbsp;{date.split('-')[0]}</>
    }

    const headerBg = [
        {'background': 'linear-gradient(45deg, #455db57e 9.16%, #5543cc82 43.89%, #683fd77b 64.72%)', 'preview': '#683fd7'},
        {'background': 'linear-gradient(45deg, #e5a0677e 9.16%, #e98b3e7e 43.89%, #ec710c7e 64.72%)', 'preview': '#ec710c'}
    ]

    const logOut = () => {
        props.logout()
        navigate('/login/entry')
    }

    return (
        <div className="mobile-profile">
            <div className="header-mobile-profile">
                <div className="main-data-cont">
                    <div className="user-avatar-container">
                        <img className="profile-icon" alt="" src="../images/default-image.jpg"></img>
                    </div>
                    <div className="user-main-container">
                        <div className="user-data" onClick={() => setOpenedHeaderMenu(!openedHeaderMenu)}>
                            <p>{props.username_global}</p>
                            <FontAwesomeIcon className="icon" icon={openedHeaderMenu ? faAngleUp : faAngleDown}/>
                        </div>
                        {
                        openedHeaderMenu ? 
                            <div className="opened-header-menu" onClick={logOut}>
                                <p><FormattedMessage id="prof_logout"/></p>
                                <FontAwesomeIcon className="icon" icon={faArrowRightFromBracket}/>
                            </div>
                        :
                        null
                        }
                        <p style={{fontSize: '13px', color: 'rgb(100, 100, 100)', marginTop: '5px'}}>{props.date_joined_global ? remakeDateJoined(props.date_joined_global) : ''}</p>
                    </div>
                </div>
                <StorageBar completed={30}/>
            </div>
            <div className="main-mobile-profile">
                <div className="name-surname-container">
                    <p className="title"><FontAwesomeIcon className="icon" style={{color: headerBg[headerBgId]['preview']}} icon={faUser} />&nbsp;<FormattedMessage id="prof_name"/></p>
                    <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                        <p>{props.name_global}</p>
                    </div>
                </div>
                <div className="email-container">
                    <p className="title"><FontAwesomeIcon className="icon" style={{color: headerBg[headerBgId]['preview']}} icon={faEnvelope} />&nbsp;<FormattedMessage id="prof_email"/></p>
                    <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                        <p>{props.email_global}</p>
                    </div>
                </div>
                <div className="subscription-container">
                    <p className="title"><FontAwesomeIcon className="icon" style={{color: headerBg[headerBgId]['preview']}} icon={faCloud} />&nbsp;<FormattedMessage id="prof_status"/></p>
                    <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                        <p style={{color: headerBg[headerBgId]['preview']}}>AD+</p>
                    </div>
                </div>
            </div>
            <Link className="home-link" to='/dashboard'><FontAwesomeIcon className="icon" icon={faArrowLeftLong} /><p><FormattedMessage id="prof_open_adisk"/></p></Link>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        username_global: state.profile.username,
        email_global: state.profile.email,
        name_global: state.profile.name,
        date_joined_global: state.profile.date_joined
    }
}

export default connect(mapStateToProps, {logout})(MobileProfile)