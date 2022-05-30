import React from "react"
import './style.scss'
import { connect } from "react-redux"
import { updateProfile } from "../../../actions/profile"

const MyAccount = (props) => {
    
    return (
        <div className="my-account-container">
            <div className="my-account-view">
                <div className="my-account">
                    <div className="main-widget">
                        <img className="profile-icon" alt="" src="../images/default-image.jpg"></img>
                        <div className="center-row">
                            <p className="username">{props.username_global}</p>
                            <p className="sub-status">AD+</p>
                        </div>
                        <div className="main-data-container">
                            <div className="name_surname_container">
                                <div className="name">
                                    <p>{props.first_name_global}</p>
                                </div>
                                <div className="surname">
                                    <p>{props.last_name_global}</p>
                                </div>
                            </div>
                            <div className="email-container">
                                <div className="email">
                                    <p>{props.email_global}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        username_global: state.profile.username,
        email_global: state.profile.email,
        first_name_global: state.profile.first_name,
        last_name_global: state.profile.last_name
    }
}

export default connect(mapStateToProps, {updateProfile})(MyAccount)