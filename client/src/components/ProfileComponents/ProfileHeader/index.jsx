import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './style.scss'
import { connect } from "react-redux"
import { logout } from "../../../actions/auth"
import { ProfileHeaderStyled } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const ProfileHeader = (props) => {

    const navigate = useNavigate()

    const [openedHeaderMenu, setOpenedHeaderMenu] = useState(false)
    
    const chooseHeaderName = (page) => {
        switch(page){
            case 'account':
                return 'My account'
            case 'settings':
                return 'Settings'
            case 'support':
                return 'Support'
        }
    }

    const logOut = () => {
        props.logout()
        navigate('/login')
    }
    
    return (
        <ProfileHeaderStyled className="prof-header-container">
            <p className="name">{chooseHeaderName(props.page)}</p>
            <div className="user-data-container">
                <img className="profile-icon" alt="" src="../images/default-image.jpg"></img>
                <div className="user">
                    <div className="user-data" onClick={() => setOpenedHeaderMenu(!openedHeaderMenu)}>
                        <p>{props.username_global}</p>
                        <FontAwesomeIcon className="icon" icon={faAngleDown}/>
                    </div>
                    {
                    openedHeaderMenu ? 
                    <div className="opened-header-menu" onClick={logOut}>
                        <p>Log out</p>
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
    }
}

export default connect(mapStateToProps, {logout})(ProfileHeader)