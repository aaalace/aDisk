import React, { useState, useEffect } from "react"
import './style.scss'
import { connect } from "react-redux"
import { getFiles, getFolderFiles } from "../../../actions/dashboard"

import MDMCreateUpload from "../MyDiskComponents/MDMobileComponents/MDMCreateUpload"

import { DashboardItemsContainerStyled } from "./styled"

import DashboardItem from "./item"

const DashboardMyDisk = (props) => {

    const [folders, setFolders] = useState([])
    const [files, setFiles] = useState([])
    const [folderFiles, setFolderFiles] = useState([])

    const [openedFolder, setOpenedFolderName] = useState(false)
    const [readyToUpdate, setReadyToUpdate] = useState(false)

    const getItems = async () => {
        const gottenItems = await props.getFiles(props.user_id, props.page)
        setFiles(gottenItems[1].files)
        setFolders(gottenItems[1].folders)
    }

    const getFolderItems = async () => {
        const gottenItems = await props.getFolderFiles(props.user_id, props.page, openedFolder)
        setFolderFiles(gottenItems[1].files)
    }

    useEffect(() => {
        if (props.user_id !== 0) {
            if (props.page === 'shared') {
                if (!props.items['shared'].filled) {
                    setFolders([])
                    setFiles([])
                    getItems()
                } else {
                    setFiles(props.items['shared'].files)
                    setFolders(props.items['shared'].folders)
                }
            }
            if (props.page !== 'shared') {
                if (!props.items['private'].filled) {
                    setFolders([])
                    setFiles([])
                    getItems()
                } else {
                    setFiles(props.items['private'].files)
                    setFolders(props.items['private'].folders)
                }
            }
        }
        document.getElementById('no_right_click').addEventListener('contextmenu', (e) => { e.preventDefault() });
    }, [props.page, props.items, readyToUpdate])

    const closeOpenedFolder = () => {
        setOpenedFolderName(false)
        setFolderFiles([])
    }

    useEffect(() => {
        if (props.user_id !== 0) {
            setReadyToUpdate(true)
        }
    }, [props.user_id])

    useEffect(() => {
        if (openedFolder) {
            getFolderItems()
        }
    }, [openedFolder])

    return (
        <div className="dashboard-content" id="no_right_click">
            <MDMCreateUpload />
            {openedFolder ?
                <>
                    <div className="ofc_bgq" onClick={() => closeOpenedFolder()} />
                    <div className="opened-folder-container">
                        {folderFiles.length > 0 ? folderFiles.map(item => {
                            return <DashboardItem folderFile={true} key={item.name} item={item} page={props.page} parentFolder={openedFolder} user_id={props.user_id} />
                        }) :
                            <p style={{ color: 'var(--black_to_white)' }}>Empty folder</p>}
                    </div>
                </>
                :
                <></>
            }
            <DashboardItemsContainerStyled cnt={folders.length + files.length}>
                {folders.map(item => {
                    return <DashboardItem setOpenedFolderName={setOpenedFolderName} key={item.name} item={item} page={props.page} user_id={props.user_id} />
                })}
                {files.map(item => {
                    return <DashboardItem key={item.name} item={item} page={props.page} user_id={props.user_id} />
                })}
            </DashboardItemsContainerStyled>
        </div >
    );
}


const mapStateToProps = (state) => {
    return {
        user_id: state.profile.user_id,
        items: state.dashboard
    }
}


export default connect(mapStateToProps, { getFiles, getFolderFiles })(DashboardMyDisk)


