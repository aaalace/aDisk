import React, { useEffect, useState } from "react"
import './style.scss'
import { useMediaQuery } from "react-responsive"
import { connect } from 'react-redux'
import { useParams } from "react-router-dom"

import NavigationPanel from "../../components/ProfileComponents/NavigationPanel"
import MyAccount from "../../components/ProfileComponents/MyAccount"
import ProfileHeader from "../../components/ProfileComponents/ProfileHeader"
import MobileProfile from "../../components/ProfileComponents/MobileProfile"

const Profile = (props) => {
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
            <MobileProfile/>
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

export default connect(mapStateToProps, {})(Profile)