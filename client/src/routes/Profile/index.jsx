import React, { useEffect } from "react"
import './style.scss'
import { useMediaQuery } from "react-responsive"
import { connect } from 'react-redux'
import { logout } from "../../actions/auth"
import { updateProfile } from "../../actions/profile"
import { deleteAccount } from "../../actions/auth"
import { useParams } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faGear, faHeadset, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom"

import NavigationPanel from "../../components/ProfileComponents/NavigationPanel"
import MyAccount from "../../components/ProfileComponents/MyAccount"
import ProfileHeader from "../../components/ProfileComponents/ProfileHeader"

const Profile = () => {
    const page = useParams().page

    const Mobile = useMediaQuery({
        query: '(max-width: 769px)'
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const choosePage = (page) =>{
        switch(page){
            case 'account':
                return <MyAccount/>
            case 'settings':
                return <MyAccount/>
            case 'support':
                return <MyAccount/>
        }
    }

    return (
        <>
        {!Mobile ?
            <div className="profile">
                <NavigationPanel/>
                <div className="right-container">
                    <ProfileHeader page={page} />
                    {choosePage(page)}
                </div>
            </div>
        :   
            <div className="mobile-profile">
                <div className="mobile-nav">
                    <NavLink to='/profile/account' className="nav-link"><FontAwesomeIcon className="icon" icon={faUserAstronaut} /></NavLink>
                    <NavLink to='/profile/settings' className="nav-link"><FontAwesomeIcon className="icon" icon={faGear} /></NavLink>
                    <NavLink to='/profile/support' className="nav-link"><FontAwesomeIcon className="icon" icon={faHeadset} /></NavLink>
                </div>
            </div>
        }           
        </>
    );
}

const mapStateToProps = state => {
    return {
        username_global: state.profile.username,
        email_global: state.profile.email,
        first_name_global: state.profile.first_name,
        last_name_global: state.profile.last_name
    }
}

export default connect(mapStateToProps, {updateProfile, logout, deleteAccount})(Profile)