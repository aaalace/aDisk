import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './style.scss'
import { connect } from "react-redux"
import { FormattedMessage } from 'react-intl'
import { logout } from "../../../../actions/auth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowRightFromBracket, faAngleUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import TopMenuBar from "../../MyDiskComponents/TopMenuBar"
import Microphone from "../../MyDiskComponents/Microphone"
import MDDSorting from "../../MyDiskComponents/MDDesktopComponents/MDDSorting"

const DashboardHeader = (props) => {

    const navigate = useNavigate()

    const [openedHeaderMenu, setOpenedHeaderMenu] = useState(false)

    const [request, setRequest] = useState('')

    const chooseHeaderName = (page) => {
        switch(page){
            case 'recent':
                return 'Recent'
            case 'files':
                return 'Files'
            case 'shared':
                return 'Shared'
            default:
                return 'Files'
        }
    }

    const logOut = () => {
        props.logout()
        navigate('/login/entry')
    }
    
    return (
        <>
            <div className="dashboard-header">
                <div className="dashboard-top-container">
                    <p className="name">{chooseHeaderName(props.page)}</p>
                    <div className="user-data-container">
                        <img className="profile-icon" onClick={() => navigate('/profile/account')} alt="" src={`${process.env.REACT_APP_API_URL}/user_profile/get_user_avatar/${props.avatar_global}`}></img>
                        <div className="user">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-search-container">
                <div className="search-box">
                    <input value={request} onChange={(e) => setRequest(e.value)} className="search-input" type='text' placeholder='Search'/>
                    <Microphone setListenedText={setRequest}/>
                    <button className="search-button" type='button'><FontAwesomeIcon className="icon" icon={faMagnifyingGlass}/></button>
                </div>
                <div className="tmb-sort-container">
                    <div className="tmb-box">
                        <TopMenuBar/>
                    </div> 
                    {
                    props.page !== 'recent' ?
                        <div className="sorting-wid">
                            <MDDSorting/>
                        </div> 
                    :
                        null
                    }
                </div>
            </div>
        </>
    )
}


const mapStateToProps = state => {
    return {
        username_global: state.profile.username,
        avatar_global: state.profile.avatar
    }
}

export default connect(mapStateToProps, {logout})(DashboardHeader)