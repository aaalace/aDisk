import React from "react"
import './style.scss'
import { useMediaQuery } from "react-responsive"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const PublicProfile = () => {

    const Mobile = useMediaQuery({
        query: '(max-width: 769px)'
    })

    return (
        <div className="pps-container">
            <div className="pps-header">
                <p className="pps-header-name">Public profile</p>
                <p className="pps-header-desc">Update your photo and personal details here</p>
            </div>
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
                <div className="pps-main">
                    <div className="pps-main-container">
                        <p className="pps-main-container-name">Username</p>
                        <input className="pps-main-container-input"></input>
                    </div>
                    <div className="pps-main-container">
                        <p className="pps-main-container-name">Email</p>
                        <input className="pps-main-container-input"></input>
                    </div>
                    <div className="pps-main-container">
                        <p className="pps-main-container-name">Name</p>
                        <input className="pps-main-container-input"></input>
                    </div>
                    <button className="update-profile">Update profile</button>
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


export default PublicProfile