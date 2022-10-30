import React, { useState } from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from "react-redux";
import { uploadNewFile } from "../../../../../actions/dashboard";
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { useDropzone } from "react-dropzone";

import SharedSwitcher from '../../SharedSwitcher'
import { useEffect, useRef } from "react";

const MDDUploadWindow = (props) => {
    
    const selectedFileRef = useRef(null)

    const [sharedOn, setSharedOn] = useState(false)

    const [resultFiles, setResultFiles] = useState([])

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({});

    useEffect(() => {
        setResultFiles(acceptedFiles)
    }, [acceptedFiles])
    
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
        <div className="mddcu_bgq" onClick={() => props.setUploadOpened(false)}/>
        <input value={''} type="file" multiple ref={selectedFileRef} style={{display: "none"}} onChange={encodeFiles}/>
        <div className="mddu_container">
            <div className="shared-access-wrapper-u">
                <p className="saw-name">
                    Shared access
                </p>
                <div className="saw-data">
                    <p className="chioce-saw">Off</p>
                    <SharedSwitcher sharedOn={sharedOn} setSharedOn={setSharedOn}/>
                    <p className="chioce-saw">On</p>
                </div>
            </div>
            <span className="custom_hr"></span>
            <div className="mddcu_line" onClick={() => refClick()}>
                <div className="mddcu_inline-item">
                    <div className="mddcu_icon">
                        <FontAwesomeIcon className="icon" icon={faFile}/>
                        <p>Files</p>
                    </div>
                </div>
            </div>
            <div {...getRootProps({ className: "drag-and-drop" })} style={isDragActive ? {border: 'dotted 2px rgb(52, 220, 52)'} : {}}>
                <input className="input-zone" {...getInputProps()} />
                <div className="dad-desc">
                {isDragActive ? (
                    <p>
                        Release to drop the files here
                    </p>
                ) :
                    <>
                    <p>Or drop them here</p>
                    <div className="dad-icon-container">
                        <FontAwesomeIcon className="icon" icon={faFile}/>
                    </div>
                    <div className="dad-counter">
                        <p style={{color: 'rgb(52, 220, 52)'}}>{acceptedFiles.length}</p> added
                    </div>
                    </>
                }
                </div>
            </div>
        </div>
        </>
    );
}


const mapStateToProps = (state) => {
    return {
        user_id: state.profile.user_id
    }
}

export default connect(mapStateToProps, {uploadNewFile})(MDDUploadWindow)


