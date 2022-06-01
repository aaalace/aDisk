import React, {useState} from "react"
import './style.scss'
import { useMediaQuery } from "react-responsive"
import { connect } from "react-redux"
import { updateProfile } from "../../../actions/profile"
import { MyAccountView, MyAccountHeader, HeaderDataContainer, MyAccountData } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faCloud, faPen, faCheck } from '@fortawesome/free-solid-svg-icons'

import Charts from "../Chart"

const MyAccount = (props) => {

    const Tablet = useMediaQuery({
        query: '(max-width: 1224px) and (min-width: 769px)'
    })

    const [editState, setEditState] = useState(false)

    const [headerBgId, setHeaderBgId] = useState(0)

    const headerBg = [
        {'background': 'linear-gradient(45deg, #455db57e 9.16%, #5543cc82 43.89%, #683fd77b 64.72%)', 'preview': '#683fd77b'},
        {'background': 'linear-gradient(45deg, #e5a0677e 9.16%, #e98b3e7e 43.89%, #ec710c7e 64.72%)', 'preview': '#ec710c7e'}
    ]

    const setHeaderBg = (id) => {
        setHeaderBgId(id)
    }
    
    return (
        <MyAccountView className="my-account-view">
            <MyAccountHeader className="my-account-header">
                <div className="header-profile-head-image" style={{background: headerBg[headerBgId]['background']}}>
                    {
                        editState ?
                        <div className="change-head-image">
                            <div className="icon" onClick={() => setHeaderBg(0)} style={{background: headerBg[0]['preview']}}/>
                            <div className="icon" onClick={() => setHeaderBg(1)} style={{background: headerBg[1]['preview']}}/>
                        </div>
                        :
                        null
                    }
                </div>
                <HeaderDataContainer className="header-profile-head-data-container">
                    <img className="profile-icon" alt="" src="../images/default-image.jpg"></img>
                    <div className="center-row">
                        <div>
                            <p className="username">{props.username_global}</p>
                        </div>
                        {   
                            editState ? 
                            <   FontAwesomeIcon className="edit-icon" style={{color: headerBg[headerBgId]['preview'], fontSize: '22px'}} onClick={() => setEditState(false)} icon={faCheck} />
                            :
                                <FontAwesomeIcon className="edit-icon" style={{color: headerBg[headerBgId]['preview']}} onClick={() => setEditState(true)} icon={faPen} />
                        }
                    </div>
                </HeaderDataContainer>
            </MyAccountHeader>
            {
                editState ?
                <MyAccountData className="my-account">
                    <div className="name-surname-container">
                        <p className="title"><FontAwesomeIcon className="icon" style={{color: headerBg[headerBgId]['preview']}} icon={faUser} />&nbsp;Name</p>
                        <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                            <input type='text'/>
                        </div>
                    </div>
                    <div className="email-container">
                        <p className="title"><FontAwesomeIcon className="icon" style={{color: headerBg[headerBgId]['preview']}} icon={faEnvelope} />&nbsp;Email</p>
                        <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                            <input type='text'/>
                        </div>
                    </div>
                    <div className="subscription-container">
                        <p className="title"><FontAwesomeIcon className="icon" style={{color: headerBg[headerBgId]['preview']}} icon={faCloud} />&nbsp;Account status</p>
                        <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                            <p style={{color: headerBg[headerBgId]['preview']}}>AD+</p>
                        </div>
                    </div>
                </MyAccountData>
                :
                <MyAccountData className="my-account">
                    <div className="name-surname-container">
                        <p className="title"><FontAwesomeIcon className="icon" style={{color: headerBg[headerBgId]['preview']}} icon={faUser} />&nbsp;Name</p>
                        <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                            <p>{props.first_name_global}&nbsp;{props.last_name_global}</p>
                        </div>
                    </div>
                    <div className="email-container">
                        <p className="title"><FontAwesomeIcon className="icon" style={{color: headerBg[headerBgId]['preview']}} icon={faEnvelope} />&nbsp;Email</p>
                        <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                            <p>{props.email_global}</p>
                        </div>
                    </div>
                    <div className="subscription-container">
                        <p className="title"><FontAwesomeIcon className="icon" style={{color: headerBg[headerBgId]['preview']}} icon={faCloud} />&nbsp;Account status</p>
                        <div style={{display: 'flex', flexDirection: 'row', marginRight: '10px'}}>
                            <p style={{color: headerBg[headerBgId]['preview']}}>AD+</p>
                        </div>
                    </div>
                </MyAccountData>
            }
            <div className="storage-stats">
                <p className="stats-header">Storage statistics</p>
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
        last_name_global: state.profile.last_name
    }
}

export default connect(mapStateToProps, {updateProfile})(MyAccount)