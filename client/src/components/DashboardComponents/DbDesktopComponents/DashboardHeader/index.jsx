import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './style.scss'
import { connect } from "react-redux"
import { FormattedMessage } from 'react-intl'
import { logout } from "../../../../actions/auth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DashboardHeaderStyled, DashboardSearchInput, DashboardSearchStyled } from "./styled"
import { faAngleDown, faArrowRightFromBracket, faAngleUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import TopMenuBar from "../../MyDiskComponents/TopMenuBar"

const DashboardHeader = (props) => {

    const navigate = useNavigate()

    const [openedHeaderMenu, setOpenedHeaderMenu] = useState(false)
    
    const chooseHeaderName = (page) => {
        switch(page){
            case 'recent':
                return 'Recent'
            case 'files':
                return 'Files'
            case 'images':
                return 'Images'
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
            <DashboardHeaderStyled className="dashboard-header">
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
            </DashboardHeaderStyled>
            <DashboardSearchStyled className="dashboard-search-container">
                <div className="search-box">
                    <DashboardSearchInput className="search-input" type='text' placeholder='Search'/>
                    <button className="search-button" type='button'><FontAwesomeIcon className="icon" icon={faMagnifyingGlass}/></button>
                </div>
                <div className="tmb-box">
                    <TopMenuBar/>
                </div>
            </DashboardSearchStyled>
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