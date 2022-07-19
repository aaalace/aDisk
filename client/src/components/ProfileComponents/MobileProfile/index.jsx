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

    const remakeDateJoined = (date) => {
        return <><FormattedMessage id='prof_since'/>&nbsp;{date.split('-')[2]}&nbsp;<FormattedMessage id={months[date.split('-')[1]]}/>&nbsp;{date.split('-')[0]}</>
    }

    const logOut = () => {
        props.logout()
        navigate('/login/entry')
    }

    return (
        <div className="mobile-profile">
            <div className="header-mobile-profile">
                <div className="main-data-cont">
                    <div className="user-avatar-container">
                    <img className="profile-icon" alt="" src={`${process.env.REACT_APP_API_URL}/user_profile/get_user_avatar/${props.avatar_global}`}></img>
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
                        <p className="date-joined">{props.date_joined_global ? remakeDateJoined(props.date_joined_global) : ''}</p>
                    </div>
                </div>
                <StorageBar completed={30}/>
            </div>
            <div className="main-mobile-profile">
                <div className="name-surname-container">
                    <p className="title"><FontAwesomeIcon className="icon" icon={faUser} />&nbsp;<FormattedMessage id="prof_name"/></p>
                    <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                        <p className="data">{props.name_global}</p>
                    </div>
                </div>
                <div className="email-container">
                    <p className="title"><FontAwesomeIcon className="icon" icon={faEnvelope} />&nbsp;<FormattedMessage id="prof_email"/></p>
                    <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                        <p className="data">{props.email_global}</p>
                    </div>
                </div>
                <div className="subscription-container">
                    <p className="title"><FontAwesomeIcon className="icon" icon={faCloud} />&nbsp;<FormattedMessage id="prof_status"/></p>
                    <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                        <p className="sub">AD+</p>
                    </div>
                </div>
            </div>
            <Link className="home-link" to='/dashboard/my-disk'><FontAwesomeIcon className="icon" icon={faArrowLeftLong} /><p><FormattedMessage id="prof_open_adisk"/></p></Link>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        username_global: state.profile.username,
        email_global: state.profile.email,
        name_global: state.profile.name,
        date_joined_global: state.profile.date_joined,
        avatar_global: state.profile.avatar
    }
}

export default connect(mapStateToProps, {logout})(MobileProfile)