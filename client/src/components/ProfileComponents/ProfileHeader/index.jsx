import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './style.scss'
import { connect } from "react-redux"
import { FormattedMessage } from 'react-intl'
import { logout } from "../../../actions/auth"
import { ProfileHeaderStyled } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowRightFromBracket, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const ProfileHeader = (props) => {

    const navigate = useNavigate()

    const [openedHeaderMenu, setOpenedHeaderMenu] = useState(false)
    
    const chooseHeaderName = (page) => {
        switch(page){
            case 'account':
                return <FormattedMessage id="prof_my_account"/>
            case 'settings':
                return <FormattedMessage id="prof_settings"/>
            case 'support':
                return <FormattedMessage id="prof_support"/>
            default:
                return <FormattedMessage id="prof_my_account"/>
        }
    }

    const logOut = () => {
        props.logout()
        navigate('/login/entry')
    }
    
    return (
        <ProfileHeaderStyled className="prof-header-container">
            <p className="name">{chooseHeaderName(props.page)}</p>
            <div className="user-data-container">
            <img className="profile-icon" alt="" src={`${process.env.REACT_APP_API_URL}/user_profile/get_user_avatar/${props.avatar_global}`}></img>
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
        </ProfileHeaderStyled>
    )
}


const mapStateToProps = state => {
    return {
        username_global: state.profile.username,
        avatar_global: state.profile.avatar
    }
}

export default connect(mapStateToProps, {logout})(ProfileHeader)