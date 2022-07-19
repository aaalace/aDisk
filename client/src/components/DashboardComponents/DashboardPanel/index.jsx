import React from "react"
import { useNavigate } from "react-router-dom"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"
import { FormattedMessage } from 'react-intl'

import { DashboardPanelStyled } from "./styled"
import StorageBar from "../../ProfileComponents/StorageBar"

const DashboardPanel = () => {

    const navigate = useNavigate()

    return (
        <DashboardPanelStyled className="dashboard-panel">
            <div className="icon-contaner">
                <img onClick={() => navigate('/')} alt='' src="../../favicon.ico"></img>
            </div>
            <div className="nav-panel">
                <div>
                    <NavLink className="nav-link" to="/dashboard/my-disk"><FontAwesomeIcon className="icon" icon={faUserAstronaut}/><p>My disk</p></NavLink>
                    <NavLink className="nav-link" to="/dashboard/my-disk_1"><FontAwesomeIcon className="icon" icon={faUserAstronaut}/><p>My disk 1</p></NavLink>
                    <NavLink className="nav-link" to="/dashboard/my-disk_2"><FontAwesomeIcon className="icon" icon={faUserAstronaut}/><p>My disk 2</p></NavLink>
                </div>
            </div>
            <div className="storage-panel">
                <StorageBar completed={30}/>
            </div>
        </DashboardPanelStyled>
    );
}


export default DashboardPanel

