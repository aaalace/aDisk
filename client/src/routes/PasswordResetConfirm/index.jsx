import React, { useEffect, useState } from "react"
import './style.scss'
import { useParams } from "react-router-dom";
import { checkResetDependency, resetPassword } from "../../actions/reset_password";
import { connect } from 'react-redux'

const PasswordResetConfirm = (props) => {

    const [avaliablePage, setAvaliablePage] = useState(false)
    const [errorState, setErrorState] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordRep, setNewPasswordRep] = useState('')

    const user_id = useParams().uid
    const token = useParams().token

    useEffect(() => {
        const check = async (user_id, token) => {

            const toSend = {'user_id': user_id, 'token': token}
            const res = await props.checkResetDependency(toSend)

            if(res[0]){
                setAvaliablePage(true)
            }
        }

        window.scrollTo(0, 0)
        check(user_id, token)
    }, [])

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

    const changePassword = async e => {
        e.preventDefault()

        const sendData = {id: user_id, token: token, new_password: newPassword, rep_password: newPasswordRep}

        const res = await props.resetPassword(sendData)

        if(res[0]){
            setErrorState('')
            setNewPassword('')
            setNewPasswordRep('')
        }
        else{
            setErrorState(res[1])
        }
    }

    return (
      <div className="dashboard">
            {
                avaliablePage ?
                    <>
                        <h2>Password reset</h2>
                        <div className="password-line">
                            <p>New password</p>
                            <input type='password' autoComplete="off" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                        </div>
                        <div className="password-line">
                            <p>Confirm password</p>
                            <input type='password' autoComplete="off" value={newPasswordRep} onChange={e => setNewPasswordRep(e.target.value)}/>
                        </div>
                        <div>
                            {errorState ? <p style={{color: 'red', fontSize: '13px'}}>{errorState}</p> : ''}
                            <button id='ass-change-password-button' onClick={updateState ? e => changePassword(e) : null} className="update-profile">Update password</button>
                        </div>
                    </>
                :
                    <p>Page is not avaliable anymore</p>
            }
      </div>
    );
}


export default connect(null, {checkResetDependency, resetPassword})(PasswordResetConfirm)