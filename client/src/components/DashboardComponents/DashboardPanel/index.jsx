import React from "react"
import { useNavigate } from "react-router-dom"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus, faFileImport, faFile, faImages, faClock } from '@fortawesome/free-solid-svg-icons'
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
            <button className="upload-file-btn" type="button"><FontAwesomeIcon className="icon" icon={faFileImport}/>&nbsp;Upload</button>
            <button className="create-file-btn" type="button"><FontAwesomeIcon className="icon" icon={faFileCirclePlus}/>&nbsp;Create</button>
            <div className="nav-panel">
                <div>
                    <NavLink className="nav-link" to="/dashboard/recent"><FontAwesomeIcon className="icon" icon={faClock}/><p>Recent</p></NavLink>
                    <NavLink className="nav-link" to="/dashboard/files"><FontAwesomeIcon className="icon" icon={faFile}/><p>Files</p></NavLink>
                    <NavLink className="nav-link" to="/dashboard/images"><FontAwesomeIcon className="icon" icon={faImages}/><p>Images</p></NavLink>
                </div>
            </div>
            <div className="storage-panel">
                <StorageBar completed={30}/>
            </div>
        </DashboardPanelStyled>
    );
}


export default DashboardPanel

