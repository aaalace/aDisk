import React, { useState } from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

import SharedSwitcher from '../../SharedSwitcher'

const MDDCreateWindow = (props) => {

    const [sharedOn, setSharedOn] = useState(false)
    
    return (
        <>
        <div className="mddcu_bgq" style={props.createOpened ? {display: 'flex'} : {display: 'none'}} onClick={() => props.setCreateOpened(false)}/>
        <div className="mddc_container" style={props.createOpened ? {display: 'flex'} : {display: 'none'}}>
            <div className="shared-access-wrapper-c">
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
                        <FontAwesomeIcon className="icon" icon={faFolder}/>
                        <p>Folder</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default MDDCreateWindow

