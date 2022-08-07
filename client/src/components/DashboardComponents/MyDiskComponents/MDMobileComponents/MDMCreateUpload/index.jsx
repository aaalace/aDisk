import React, { useState } from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFolder, faBoxesPacking, faFile } from '@fortawesome/free-solid-svg-icons'

import SharedSwitcher from "../../SharedSwitcher"

const MDMCreateUpload = () => {

    const [createUploadOpened, setCreateUploadOpened] = useState(false)

    const [sharedOn, setSharedOn] = useState(false)

    return (
        <>
        <div className="create_upload_mobile_bg" style={createUploadOpened ? {display: 'flex'} : {display: 'none'}} onClick={() => setCreateUploadOpened(false)}/>
        <div className="create_upload_mobile_container" style={createUploadOpened ? {display: 'flex'} : {display: 'none'}}>
            <div className="shared_switcher_mobile_container">
                <p className="mc-naming">Shared access</p>
                <div className="shared-access-wrapper">
                    <p className="chioce-saw">Off</p>
                    <SharedSwitcher sharedOn={sharedOn} setSharedOn={setSharedOn}/>
                    <p className="chioce-saw">On</p>
                </div>
            </div>
            <div className="create_mobile_container">
                <p className="mc-naming">Create</p>
                <div className="cu_line">
                    <div className="cu_item">
                        <div className="cu_icon"><FontAwesomeIcon className="icon" icon={faFolder}/></div>
                        <p>Folder</p>
                    </div>
                </div>
            </div>
            <div className="upload_mobile_container">
                <p className="mc-naming">Upload</p>
                <div className="cu_line">
                    <div className="cu_inline-item">
                        <div className="cu_icon">
                            <FontAwesomeIcon className="icon" icon={faFile}/>
                            <p>File</p>
                        </div>
                    </div>
                    <div className="cu_inline-item">
                        <div className="cu_icon">
                            <FontAwesomeIcon className="icon" icon={faBoxesPacking}/>
                            <p>Archive as folder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className="create_upload_mobile_button" onClick={() => setCreateUploadOpened(true)}><FontAwesomeIcon className="icon" icon={faPlus}/></button>
        </>
    );
}


export default MDMCreateUpload

