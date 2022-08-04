import React, { useState } from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFolder, faImage, faFile } from '@fortawesome/free-solid-svg-icons'

const MDMCreateUpload = () => {

    const [createUploadOpened, setCreateUploadOpened] = useState(false)

    return (
        <>
        <div className="create_upload_mobile_bg" style={createUploadOpened ? {display: 'flex'} : {display: 'none'}} onClick={() => setCreateUploadOpened(false)}/>
        <div className="create_upload_mobile_container" style={createUploadOpened ? {display: 'flex'} : {display: 'none'}}>
            <div className="cu_line">
                <div className="cu_item">
                    <div className="cu_icon"><FontAwesomeIcon className="icon" icon={faFolder}/></div>
                    <p>Folder</p>
                </div>
                <div className="cu_item">
                    <div className="cu_icon"><FontAwesomeIcon className="icon" icon={faFile}/></div>
                    <p>File</p>
                </div>
                <div className="cu_item">
                    <div className="cu_icon"><FontAwesomeIcon className="icon" icon={faImage}/></div>
                    <p>Image</p>
                </div>
            </div>
        </div>
        <button className="create_upload_mobile_button" onClick={() => setCreateUploadOpened(true)}><FontAwesomeIcon className="icon" icon={faPlus}/></button>
        </>
    );
}


export default MDMCreateUpload

