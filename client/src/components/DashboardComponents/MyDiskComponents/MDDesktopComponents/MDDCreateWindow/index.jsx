import React, { useState } from "react"
import './style.scss'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { createNewFolder } from "../../../../../actions/dashboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

import SharedSwitcher from '../../SharedSwitcher'

const MDDCreateWindow = (props) => {

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
    
    return (
        <>
        <div className="mddcu_bgq" onClick={() => props.setCreateOpened(false)}/>
        <div className="mddc_container">
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
                    {!nameInputOpened ?
                        <div className="mddcu_icon" onClick={() => setNameInputOpened(true)}>
                            <FontAwesomeIcon className="icon" icon={faFolder}/>
                            <p>Folder</p>
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
        </div>
        </>
    );
}


const mapStateToProps = (state) => {
    return {
        user_id: state.profile.user_id
    }
}


export default connect(mapStateToProps, {createNewFolder})(MDDCreateWindow)

