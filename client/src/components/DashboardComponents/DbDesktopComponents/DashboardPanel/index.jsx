import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus, faFileImport, faFile, faUsers, faClock } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"

import { DashboardPanelStyled } from "./styled"
import StorageBar from "../../../ProfileComponents/StorageBar"
import MDDCreateWindow from "../../MyDiskComponents/MDDesktopComponents/MDDCreateWindow"
import MDDUploadWindow from "../../MyDiskComponents/MDDesktopComponents/MDDUploadWindow"

const DashboardPanel = () => {

    const navigate = useNavigate()

    const [createOpened, setCreateOpened] = useState(false)
    const [uploadOpened, setUploadOpened] = useState(false)

    return (
        <DashboardPanelStyled className="dashboard-panel">
            <div className="icon-contaner">
                <img onClick={() => navigate('/')} alt='' src="../../favicon.ico"></img>
            </div>
            <button onClick={() => setUploadOpened(true)} className="upload-file-btn" type="button"><FontAwesomeIcon className="icon" icon={faFileImport}/>&nbsp;Upload</button>
            <button onClick={() => setCreateOpened(true)} className="create-file-btn" type="button"><FontAwesomeIcon className="icon" icon={faFileCirclePlus}/>&nbsp;Create</button>
            <div className="nav-panel">
                <div>
                    <NavLink className="nav-link" to="/dashboard/recent"><FontAwesomeIcon className="icon" icon={faClock}/><p>Recent</p></NavLink>
                    <NavLink className="nav-link" to="/dashboard/files"><FontAwesomeIcon className="icon" icon={faFile}/><p>Files</p></NavLink>
                    <NavLink className="nav-link" to="/dashboard/shared"><FontAwesomeIcon className="icon" icon={faUsers}/><p>Shared</p></NavLink>
                </div>
            </div>
            <div className="storage-panel">
                <StorageBar completed={30}/>
            </div>
            {
                uploadOpened ?
                <MDDUploadWindow uploadOpened={uploadOpened} setUploadOpened={setUploadOpened}/>
                :
                null
            }
            {
                createOpened ?
                <MDDCreateWindow createOpened={createOpened} setCreateOpened={setCreateOpened}/>
                :
                null
            }

        </DashboardPanelStyled>
    );
}


export default DashboardPanel

