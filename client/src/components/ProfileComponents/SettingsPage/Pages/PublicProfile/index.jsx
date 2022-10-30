import React, { useState, useRef } from "react"
import './style.scss'
import { useMediaQuery } from "react-responsive"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faEllipsis, faMinus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux"
import { updateProfile, updateAvatar, deleteAvatar } from "../../../../../actions/profile"
import { FormattedMessage } from 'react-intl'
import CropImage from "../../../../../components/ProfileComponents/CropImage";

const PublicProfile = (props) => {

    const Mobile = useMediaQuery({
        query: '(max-width: 769px)'
    })

    const selectedFileRef = useRef(null)

    const [errorState, setErrorState] = useState(null)

    const [editAvatarState, setEditAvatarState] = useState(null)

    const [newUsername, setUsername] = useState('')
    const [newEmail, setEmail] = useState('')
    const [newName, setName] = useState('')

    const [cropSrc, setCropSrc] = useState('')

    const [inputFileValue, setInputFileValue] = useState('')

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

    const sendNewAvatar = (data) => {
        if(data.src){
            props.updateAvatar({b64: data.src, crop: data.crop, user_id: props.user_id_global, prev_avatar: props.avatar_global})
        }
        setCropSrc('')
    }

    const encodeImage = (event) => {
        if(event.target.files && event.target.files.length > 0){
            const reader = new FileReader()
            reader.addEventListener(
                'load',
                () => setCropSrc(reader.result)
            )
            reader.readAsDataURL(event.target.files[0])
        }
    }

    const updateAvatar = async () => {
        selectedFileRef.current.click();
        setEditAvatarState(false)
    }

    const deleteAvatar = async () => {
        if(props.avatar_global !== 'default.jpg'){
            if (window.confirm('Delete avatar?')){
                props.deleteAvatar({user_id: props.user_id_global, avatar: props.avatar_global})
                setEditAvatarState(false)
            }
        }
    }

    let updateState = false
    let updateButtonElement = document.getElementById("pps-update-button")
    if(updateButtonElement){
        if(newUsername !== '' || newEmail !== '' || newName !== ''){
            updateButtonElement.classList.add("active-update-profile")
            updateState = true
        }
        else{
            updateButtonElement.classList.remove("active-update-profile")
        }
    }

    if(editAvatarState !== null && !Mobile){
        if(editAvatarState){
            document.getElementById('pps-edit-btn').setAttribute('class', 'pps-edit-active')
            document.getElementById('pps-delete-btn').setAttribute('class', 'pps-delete-active')
        }
        else{
            document.getElementById('pps-edit-btn').setAttribute('class', 'pps-edit-button')
            document.getElementById('pps-delete-btn').setAttribute('class', 'pps-delete-button')
        }
    }
 
    return (
        <div className="pps-container">
            <CropImage src={cropSrc} sendNewAvatar={sendNewAvatar}></CropImage>
            <input value={inputFileValue} type="file" ref={selectedFileRef} style={{display: "none"}} onChange={encodeImage} onClick={() => setInputFileValue('')}/>
            {!Mobile ?
                <div className="pps-header">
                    <p className="pps-header-name"><FormattedMessage id="sett_public_profile"/></p>
                    <p className="pps-header-desc"><FormattedMessage id="sett_public_desc"/></p>
                </div>
            :
                null}
            <div className="pps">
                { Mobile ?
                    <div className="pps-avatar">
                        <p className="pps-avatar-name"><FormattedMessage id="sett_public_picture"/></p>
                        <div className="pps-avatar-container">
                            <img className="pps-avatar" alt="" src={`${process.env.REACT_APP_API_URL}/user_profile/get_user_avatar/${props.avatar_global}`}></img>
                            <button onClick={() => updateAvatar()} className="pps-edit-mob-button"><FontAwesomeIcon icon={faLink}/></button>
                            <button onClick={() => deleteAvatar()} className="pps-delete-mob-button"><FontAwesomeIcon icon={faMinus}/></button>
                        </div>
                    </div>
                :
                null
                }
                <div className="pps-main" onKeyDown={e => handleKeyDown(e)}>
                    <div className="pps-main-container">
                        <p className="pps-main-container-name"><FormattedMessage id="sett_public_username"/></p>
                        <input placeholder={props.username_global} value={newUsername} onChange={e => setUsername(e.target.value)} className="pps-main-container-input"></input>
                    </div>
                    <div className="pps-main-container">
                        <p className="pps-main-container-name"><FormattedMessage id="sett_public_email"/></p>
                        <input placeholder={props.email_global} value={newEmail} onChange={e => setEmail(e.target.value)} className="pps-main-container-input"></input>
                    </div>
                    <div className="pps-main-container">
                        <p className="pps-main-container-name"><FormattedMessage id="sett_public_name"/></p>
                        <input placeholder={props.name_global} value={newName} onChange={e => setName(e.target.value)} className="pps-main-container-input"></input>
                    </div>
                    <div>
                        {errorState ? <p style={{color: 'red', fontSize: '13px', bottom: '10px', position: 'relative'}}>{<FormattedMessage id={errorState}/>}</p> : ''}
                        <button onClick={updateState ? () => updateProfile() : null} className="update-profile" id="pps-update-button"><FormattedMessage id="sett_public_update"/></button>
                    </div>
                </div>
                { !Mobile ?
                    <div className="pps-avatar">
                        <p className="pps-avatar-name"><FormattedMessage id="sett_public_picture"/></p>
                        <div className="pps-avatar-container">
                            <img className="pps-avatar" alt="" src={`${process.env.REACT_APP_API_URL}/user_profile/get_user_avatar/${props.avatar_global}`}></img>
                            <button id="pps-menu-btn" className="pps-menu-button" onClick={() => setEditAvatarState(!editAvatarState)}>{editAvatarState ? <FontAwesomeIcon icon={faMinus}/> : <FontAwesomeIcon icon={faEllipsis}/>}</button>
                            <button id="pps-edit-btn" style={editAvatarState === null ? {display: 'none'}: {}} onClick={() => updateAvatar()}><FontAwesomeIcon icon={faLink}/></button>
                            <button id="pps-delete-btn" style={editAvatarState === null ? {display: 'none'}: {}} className="pps-delete-button" onClick={() => deleteAvatar()}><FontAwesomeIcon icon={faTrashCan}/></button>
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
        username_global: state.profile.username,
        email_global: state.profile.email,
        name_global: state.profile.name,
        avatar_global: state.profile.avatar
    }
}

export default connect(mapStateToProps, {updateProfile, updateAvatar, deleteAvatar})(PublicProfile)