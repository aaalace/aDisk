import React from "react"
import './style.scss'
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FormattedMessage } from 'react-intl'
import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { logout } from "../../../actions/auth"

const MobileController = (props) => {

    const navigate = useNavigate()

    const logOut = () => {
        props.logout()
        navigate('/login/entry')
    }
    

    const chooseHeading = (page) => {
        switch(page){
            case 'account': 
                return <FormattedMessage id="prof_my_account"/>
            case 'settings': 
                return <FormattedMessage id="prof_settings"/>
            case 'support': 
                return <FormattedMessage id="prof_support"/>
            default:
                return <FormattedMessage id="prof_my_account"/>
        }
    }

    return (
        <div className="mobile-controller">
            <Link className="link" to='/dashboard/recent'><FontAwesomeIcon className="icon" icon={faHome}/></Link>
            <h1>{chooseHeading(props.page)}</h1>
            <div className="actions-container">
                <button className="action-button-leave" onClick={logOut}><FontAwesomeIcon className="icon" icon={faArrowRightFromBracket}/></button>
            </div>
        </div>
    )
}


export default connect(null, {logout})(MobileController)