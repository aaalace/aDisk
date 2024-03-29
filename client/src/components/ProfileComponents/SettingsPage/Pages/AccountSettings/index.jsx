import React, { useState } from "react"
import './style.scss'
import { useMediaQuery } from "react-responsive"
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { changePassword } from "../../../../../actions/auth"
import { deleteAccount } from "../../../../../actions/auth";
import { FormattedMessage } from 'react-intl'

import ThemeSwitch from '../../../../GeneralComponents/ThemeSwitch'
import { LanguageChoice } from '../../../../GeneralComponents/LanguageChoice'

const AccountSettings = (props) => {
    const navigate = useNavigate()

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

    const deleteAccount = e => {
        e.preventDefault()
        if (window.confirm('Are you sure you want to delete an account? Once you delete your account, there is no going back. Please be certain.')){
            props.deleteAccount()
            navigate('/')
        }
    }

    const [errorState, setErrorState] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordRep, setNewPasswordRep] = useState('')

    const changePassword = async e => {
        e.preventDefault()

        const sendData = {id: props.user_id_global, new_password: newPassword, rep_password: newPasswordRep}

        const res = await props.changePassword(sendData)
        if(res[0]){
            setErrorState('')
            setNewPassword('')
            setNewPasswordRep('')
        }
        else{
            setErrorState(res[1])
        }
    }

    let updateState = false
    let updateButtonElement = document.getElementById("ass-change-password-button")
    if(updateButtonElement){
        if(newPassword.length > 7 && newPasswordRep.length > 7){
            updateButtonElement.classList.add("active-change-password")
            updateState = true
        }
        else{
            updateButtonElement.classList.remove("active-change-password")
        }
    }

    return (
        <div className="ass-container">
            {!Mobile ?
                <div className="ass-header">
                    <p className="ass-header-name"><FormattedMessage id="sett_acc"/></p>
                    <p className="ass-header-desc"><FormattedMessage id="sett_acc_desc"/></p>
                </div> 
            :
                null}
            
            <div className="ass">
                { !Mobile ?
                    <div className="ass-main">
                        <div className="ass-theme">
                            <p className="ass-theme-name"><FormattedMessage id="sett_acc_appearance"/></p>
                            <ThemeSwitch checked={appTheme} onChange={() => handleThemeChange(!appTheme)}/>
                        </div>
                        <div className="ass-languague">
                            <p className="ass-languague-name"><FormattedMessage id="sett_acc_lang"/></p>
                            <LanguageChoice currentLocale={props.currentLocale} handleChange={props.handleChange} customStyles={langStyles}/>
                        </div>
                        <div className="ass-delete">
                            <p className="ass-delete-name"><FormattedMessage id="sett_acc_delete_head"/></p>
                            <p className="ass-delete-desc"><FormattedMessage id="sett_acc_delete_desc"/></p>
                            <button className="ass-delete-account" onClick={e => deleteAccount(e)}><FormattedMessage id="sett_acc_delete_btn"/></button>
                        </div>
                    </div>
                :
                    null
                }
                <div className="ass-password">
                    <p className="ass-password-name"><FormattedMessage id="sett_acc_pass_name"/></p>
                    <div className="password-line">
                        <p><FormattedMessage id="sett_acc_pass_new"/></p>
                        <input type='password' autoComplete="off" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                    </div>
                    <div className="password-line">
                        <p><FormattedMessage id="sett_acc_pass_confirm"/></p>
                        <input type='password' autoComplete="off" value={newPasswordRep} onChange={e => setNewPasswordRep(e.target.value)}/>
                    </div>
                    <div>
                        {errorState ? <p style={{color: 'red', fontSize: '13px', bottom: '10px', position: 'relative'}}>{<FormattedMessage id={errorState}/>}</p> : ''}
                        <button id='ass-change-password-button' onClick={updateState ? e => changePassword(e) : null} className="update-profile"><FormattedMessage id="sett_acc_pass_btn"/></button>
                    </div>
                </div>
                { Mobile ?
                    <div className="ass-main">
                        <div className="ass-theme">
                            <p className="ass-theme-name"><FormattedMessage id="sett_acc_appearance"/></p>
                            <ThemeSwitch checked={appTheme} onChange={() => handleThemeChange(!appTheme)}/>
                        </div>
                        <div className="ass-languague">
                            <p className="ass-languague-name"><FormattedMessage id="sett_acc_lang"/></p>
                            <LanguageChoice currentLocale={props.currentLocale} handleChange={props.handleChange} customStyles={langStyles}/>
                        </div>
                        <div className="ass-delete">
                            <p className="ass-delete-name"><FormattedMessage id="sett_acc_delete_head"/></p>
                            <p className="ass-delete-desc"><FormattedMessage id="sett_acc_delete_desc"/></p>
                            <button className="ass-delete-account" onClick={e => deleteAccount(e)}><FormattedMessage id="sett_acc_delete_btn"/></button>
                        </div>
                    </div>
                :
                    null
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user_id_global: state.profile.user_id,
    }
}

export default connect(mapStateToProps, {changePassword, deleteAccount})(AccountSettings)