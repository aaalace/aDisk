import React, { useEffect } from "react"
import './style.scss'
import { useMediaQuery } from "react-responsive"
import { useParams } from "react-router-dom"

import NavigationPanel from "../../components/ProfileComponents/NavigationPanel"
import ProfileHeader from "../../components/ProfileComponents/ProfileHeader"
import MyAccount from "../../components/ProfileComponents/MyAccount"
import SettingsPage from "../../components/ProfileComponents/SettingsPage"
import SupportPage from "../../components/ProfileComponents/SupportPage"

import MobileNav from "../../components/ProfileComponents/MobileNav"
import MobileProfile from "../../components/ProfileComponents/MobileProfile"
import MobileController from "../../components/ProfileComponents/MobileController"

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
                return <SettingsPage currentLocale={props.currentLocale} handleChange={props.handleChange}/>
            case 'support':
                return <SupportPage/>
            default: 
                return <MyAccount/>
        }
    }

    const chooseMobilePage = (page) =>{
        switch(page){
            case 'account':
                return <MobileProfile/>
            case 'settings':
                return <SettingsPage currentLocale={props.currentLocale} handleChange={props.handleChange}/>
            case 'support':
                return <SupportPage/>
            default: 
                return <MobileProfile/>
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
            <div className="profile">
                <MobileController page={page} />
                {chooseMobilePage(page)}
                <MobileNav/>
            </div>
        }           
        </>
    );
}

export default Profile