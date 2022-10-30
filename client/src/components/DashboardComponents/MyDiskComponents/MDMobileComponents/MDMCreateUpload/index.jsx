import React, { useState, useRef } from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFolder, faFile, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { createNewFolder, uploadNewFile } from "../../../../../actions/dashboard";

import SharedSwitcher from "../../SharedSwitcher"

const MDMCreateUpload = (props) => {
    
    const selectedFileRef = useRef(null)
    const [createUploadOpened, setCreateUploadOpened] = useState(false)

    const [sharedOn, setSharedOn] = useState(false)
    const [nameInputOpened, setNameInputOpened] = useState(false)
    const [folderName, setFolderName] = useState('')
    
    const createNewFolder = () => {
        const place = sharedOn ? 'shared' : 'private'
        props.createNewFolder(props.user_id, place, folderName)
        setNameInputOpened(false)
        setFolderName('')
        setSharedOn(false)
    }

    const sendEncodedFiles = (b64, name) => {
        const place = sharedOn ? 'shared' : 'private'
        props.uploadNewFile(props.user_id, place, name, b64)
        setSharedOn(false)
    }

    const encodeFiles = (event) => {
        const files = event.target.files
        for (let i = 0; i < files.length; i++){
            const name = files[i].name
            const reader = new FileReader()
            reader.addEventListener(
                'load',
                () => sendEncodedFiles(reader.result, name)
            )
            reader.readAsDataURL(files[i])
        }
    }

    const refClick = async () => {
        selectedFileRef.current.click();
    }
        

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
                    {!nameInputOpened ?
                        <div className="cu_inline-item">
                            <div className="cu_icon" onClick={() => setNameInputOpened(true)}>
                                <FontAwesomeIcon className="icon" icon={faFolder}/>
                                <p>Folder</p>
                            </div>
                        </div> :
                        <div style={{width: '90%'}}>
                            <div className="name-box">
                                <input value={folderName} onChange={e => setFolderName(e.target.value)} className="name-input" type='text' placeholder='Name'/>
                                <button className="name-button" type='button' onClick={() => createNewFolder()}><FontAwesomeIcon className="icon" icon={faFolderPlus}/></button>
                            </div>
                            <div className="close-button" type='button'><p style={{width: 'fit-content'}} onClick={() => setNameInputOpened(false)}>close</p></div>
                        </div>
                    }
                </div>
            </div>
            <input value={''} type="file" multiple ref={selectedFileRef} style={{display: "none"}} onChange={encodeFiles}/>
            <div className="upload_mobile_container">
                <p className="mc-naming">Upload</p>
                <div className="cu_line" onClick={() => refClick()}>
                    <div className="cu_inline-item">
                        <div className="cu_icon">
                            <FontAwesomeIcon className="icon" icon={faFile}/>
                            <p>Files</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className="create_upload_mobile_button" onClick={() => setCreateUploadOpened(true)}><FontAwesomeIcon className="icon" icon={faPlus}/></button>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        user_id: state.profile.user_id
    }
}

export default connect(mapStateToProps, {createNewFolder, uploadNewFile})(MDMCreateUpload)



