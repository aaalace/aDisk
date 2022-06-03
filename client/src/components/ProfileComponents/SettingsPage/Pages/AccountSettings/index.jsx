import React, { useState } from "react"
import './style.scss'
import { useMediaQuery } from "react-responsive"

import ThemeSwitch from '../../../../GeneralComponents/ThemeSwitch'
import { LanguageChoice } from '../../../../GeneralComponents/LanguageChoice'

const AccountSettings = (props) => {

    const Mobile = useMediaQuery({
        query: '(max-width: 769px)'
    })

    
    const langStyles = {
        select: {color: 'white', backgroundColor: 'grey'},
        option: {color: 'white', backgroundColor: 'grey'}
    }

    const setUserThemeIcon = () => {
        const userTheme = localStorage.getItem('theme')
        if(userTheme === 'light'){
            return false
        }
        return true
    }

    const [appTheme, setAppTheme] = useState(setUserThemeIcon)

    const handleThemeChange = (changeTo) => {
        if(changeTo) {
            setAppTheme(true)
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark')
        } 
        else {
            setAppTheme(false)
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light')
        }
    };

    return (
        <div className="ass-container">
            <div className="ass-header">
                <p className="ass-header-name">Account settings</p>
                <p className="ass-header-desc">Update your private details here</p>
            </div>
            
            <div className="ass">
                { !Mobile ?
                    <div className="ass-main">
                        <div className="ass-theme">
                            <p className="ass-theme-name">Appearance</p>
                            <ThemeSwitch checked={appTheme} onChange={() => handleThemeChange(!appTheme)}/>
                        </div>
                        <div className="ass-languague">
                            <p className="ass-languague-name">Language</p>
                            <LanguageChoice currentLocale={props.currentLocale} handleChange={props.handleChange} customStyles={langStyles}/>
                        </div>
                        <div className="ass-delete">
                            <p className="ass-delete-name">Delete account</p>
                            <p className="ass-delete-desc">Once you delete your account, there is no going back. Please be certain.</p>
                            <button className="ass-delete-account">Delete your account</button>
                        </div>
                    </div>
                :
                    null
                }
                <div className="ass-password">
                    <p className="ass-password-name">Change password</p>
                    <div className="password-line">
                        <p>Old password</p>
                        <input type='password' autocomplete="off"/>
                    </div>
                    <div className="password-line">
                        <p>New password</p>
                        <input type='password' autocomplete="off"/>
                    </div>
                    <div className="password-line">
                        <p>Confirm password</p>
                        <input type='password' autocomplete="off"/>
                    </div>
                    <button className="update-profile">Update password</button>
                </div>
                { Mobile ?
                    <div className="ass-main">
                        <div className="ass-theme">
                            <p className="ass-theme-name">Appearance</p>
                            <ThemeSwitch checked={appTheme} onChange={() => handleThemeChange(!appTheme)}/>
                        </div>
                        <div className="ass-languague">
                            <p className="ass-languague-name">Languague</p>
                            <LanguageChoice currentLocale={props.currentLocale} handleChange={props.handleChange} customStyles={langStyles}/>
                        </div>
                        <div className="ass-delete">
                            <p className="ass-delete-name">Delete account</p>
                            <p className="ass-delete-desc">Once you delete your account, there is no going back. Please be certain.</p>
                            <button className="ass-delete-account">Delete your account</button>
                        </div>
                    </div>
                :
                    null
                }
            </div>
        </div>
    )
}


export default AccountSettings