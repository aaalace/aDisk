import React, { useEffect } from "react"
import './style.scss'
import { connect } from 'react-redux'
import { logout } from "../../actions/auth"
import { updateProfile } from "../../actions/profile"
import { deleteAccount } from "../../actions/auth"
import { useParams } from "react-router-dom"

import NavigationPanel from "../../components/ProfileComponents/NavigationPanel"
import MyAccount from "../../components/ProfileComponents/MyAccount"
import ProfileHeader from "../../components/ProfileComponents/ProfileHeader"

const Profile = () => {
    const page = useParams().page

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
        <div className="profile">
            <NavigationPanel/>
            <div>
                <ProfileHeader page={page} />
                {choosePage(page)}
            </div>
        </div>
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