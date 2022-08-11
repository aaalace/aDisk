import React, { useState, useCallback } from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesPacking, faFile } from '@fortawesome/free-solid-svg-icons'
import { useDropzone } from "react-dropzone";

import SharedSwitcher from '../../SharedSwitcher'
import { useEffect } from "react";

const MDDUploadWindow = (props) => {

    const [sharedOn, setSharedOn] = useState(false)

    const [resultFiles, setResultFiles] = useState([])

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({});

    useEffect(() => {
        setResultFiles(acceptedFiles)
    }, [acceptedFiles])

    useEffect(() => {
        console.log(resultFiles)
    }, [resultFiles])
        
    return (
        <>
        <div className="mddcu_bgq" onClick={() => props.setUploadOpened(false)}/>
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
            <div className="mddcu_line">
                <div className="mddcu_inline-item">
                    <div className="mddcu_icon">
                        <FontAwesomeIcon className="icon" icon={faFile}/>
                        <p>File</p>
                    </div>
                </div>
                <div className="mddcu_inline-item">
                    <div className="mddcu_icon">
                        <FontAwesomeIcon className="icon" icon={faBoxesPacking}/>
                        <p>Archive as folder</p>
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
                        <FontAwesomeIcon className="icon" icon={faBoxesPacking}/>
                    </div>
                    <div className="dad-counter">
                        <p style={{color: 'rgb(52, 220, 52)'}}>{acceptedFiles.length}</p> files added
                    </div>
                    </>
                }
                </div>
            </div>
        </div>
        </>
    );
}


export default MDDUploadWindow

