import React, { useState } from "react"
import './style.scss'
import { useMediaQuery } from "react-responsive"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux"
import { updateProfile } from "../../../../../actions/profile"

const PublicProfile = (props) => {

    const Mobile = useMediaQuery({
        query: '(max-width: 769px)'
    })

    const [errorState, setErrorState] = useState(null)

    const [newUsername, setUsername] = useState('')
    const [newEmail, setEmail] = useState('')
    const [newName, setName] = useState('')

    let updateState = false
    let updateButtonElement = document.getElementById("pps-update-button")
    if(updateButtonElement){
        if(newUsername != '' || newEmail != '' || newName != ''){
            updateButtonElement.classList.add("active-update-profile")
            updateState = true
        }
        else{
            updateButtonElement.classList.remove("active-update-profile")
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            updateProfile()
        }
      }

    const updateProfile = async () => {

        let sendData = {username: props.username_global, email: props.email_global, name: props.name_global}
        if(newUsername){
            sendData.username = newUsername
        }
        if(newEmail){
            sendData.email = newEmail
        }
        if(newName){
            sendData.name = newName
        }

        const response = await props.updateProfile(sendData)
        if(response[0]){
            setUsername('')
            setEmail('')
            setName('')
            setErrorState(null)
        }
        else{
            setErrorState(response[1])
        }
    }

    return (
        <div className="pps-container">

            {!Mobile ?
                <div className="pps-header">
                    <p className="pps-header-name">Public profile</p>
                    <p className="pps-header-desc">Update your photo and personal details here</p>
                </div>
            :
                null}
            <div className="pps">
                { Mobile ?
                    <div className="pps-avatar">
                        <p className="pps-avatar-name">Profile picture</p>
                        <div className="pps-avatar-container">
                            <img className="pps-avatar" alt="" src="../images/default-image.jpg"></img>
                            <button className="pps-edit-button"><FontAwesomeIcon icon={faLink}/></button>
                        </div>
                    </div>
                :
                null
                }
                <div className="pps-main" onKeyDown={e => handleKeyDown(e)}>
                    <div className="pps-main-container">
                        <p className="pps-main-container-name">Username</p>
                        <input placeholder={props.username_global} value={newUsername} onChange={e => setUsername(e.target.value)} className="pps-main-container-input"></input>
                    </div>
                    <div className="pps-main-container">
                        <p className="pps-main-container-name">Email</p>
                        <input placeholder={props.email_global} value={newEmail} onChange={e => setEmail(e.target.value)} className="pps-main-container-input"></input>
                    </div>
                    <div className="pps-main-container">
                        <p className="pps-main-container-name">Name</p>
                        <input placeholder={props.name_global} value={newName} onChange={e => setName(e.target.value)} className="pps-main-container-input"></input>
                    </div>
                    <div>
                        {errorState ? <p style={{color: 'red', fontSize: '13px', bottom: '10px', position: 'relative'}}>{errorState}</p> : ''}
                        <button onClick={updateState ? () => updateProfile() : null} className="update-profile" id="pps-update-button">Update profile</button>
                    </div>
                </div>
                { !Mobile ?
                    <div className="pps-avatar">
                        <p className="pps-avatar-name">Profile picture</p>
                        <div className="pps-avatar-container">
                            <img className="pps-avatar" alt="" src="../images/default-image.jpg"></img>
                            <button className="pps-edit-button"><FontAwesomeIcon icon={faLink}/></button>
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
        username_global: state.profile.username,
        email_global: state.profile.email,
        name_global: state.profile.name,
    }
}

export default connect(mapStateToProps, {updateProfile})(PublicProfile)