import React, {useState} from "react"
import './style.scss'
import { connect } from "react-redux"
import { MyAccountView, MyAccountHeader, HeaderDataContainer, MyAccountData } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faCloud } from '@fortawesome/free-solid-svg-icons'
import { FormattedMessage } from 'react-intl'

import Charts from "../Chart"

const MyAccount = (props) => {

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

    const [headerBgId, setHeaderBgId] = useState(0)

    const headerBg = [
        {'background': 'linear-gradient(45deg, #455db57e 9.16%, #5543cc82 43.89%, #683fd77b 64.72%)', 'preview': '#683fd77b'},
        {'background': 'linear-gradient(45deg, #e5a0677e 9.16%, #e98b3e7e 43.89%, #ec710c7e 64.72%)', 'preview': '#ec710c7e'}
    ]

    return (
        <MyAccountView className="my-account-view">
            <MyAccountHeader className="my-account-header">
                <div className="header-profile-head-image" style={{background: headerBg[headerBgId]['background']}}>
                </div>
                <HeaderDataContainer className="header-profile-head-data-container">
                    <img className="profile-icon" alt="" src="../images/default-image.jpg"></img>
                    <div className="center-row">
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <p className="username">{props.username_global}</p>
                        </div>
                        <p style={{fontSize: '13px'}}>{props.date_joined_global ? remakeDateJoined(props.date_joined_global) : ''}</p>
                    </div>
                </HeaderDataContainer>
            </MyAccountHeader>
            <MyAccountData className="my-account">
                <div className="name-surname-container">
                    <p className="title"><FontAwesomeIcon className="icon" style={{color: headerBg[headerBgId]['preview']}} icon={faUser} />&nbsp;<FormattedMessage id='prof_name'/></p>
                    <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                        <p>{props.first_name_global}&nbsp;{props.last_name_global}</p>
                    </div>
                </div>
                <div className="email-container">
                    <p className="title"><FontAwesomeIcon className="icon" style={{color: headerBg[headerBgId]['preview']}} icon={faEnvelope} />&nbsp;<FormattedMessage id='prof_email'/></p>
                    <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                        <p>{props.email_global}</p>
                    </div>
                </div>
                <div className="subscription-container">
                    <p className="title"><FontAwesomeIcon className="icon" style={{color: headerBg[headerBgId]['preview']}} icon={faCloud} />&nbsp;<FormattedMessage id='prof_status'/></p>
                    <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                        <p style={{color: headerBg[headerBgId]['preview']}}>AD+</p>
                    </div>
                </div>
            </MyAccountData>
            <div className="storage-stats">
                <p className="stats-header"><FormattedMessage id='prof_statistics'/></p>
                <Charts themeId={headerBgId}/>
            </div>
        </MyAccountView>
    )
}



const mapStateToProps = state => {
    return {
        username_global: state.profile.username,
        email_global: state.profile.email,
        first_name_global: state.profile.first_name,
        last_name_global: state.profile.last_name,
        date_joined_global: state.profile.date_joined
    }
}

export default connect(mapStateToProps, {})(MyAccount)