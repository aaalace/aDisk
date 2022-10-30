import React, { useState, useEffect } from "react"
import './style.scss'
import { connect } from "react-redux"
import { getFiles } from "../../../actions/dashboard"
import { nanoid } from 'nanoid'

import MDMCreateUpload from "../MyDiskComponents/MDMobileComponents/MDMCreateUpload"

import { DashboardItemsContainerStyled } from "./styled"

import DashboardItem from "./item"

const DashboardMyDisk = (props) => {

    const [folders, setFolders] = useState([])
    const [files, setFiles] = useState([])

    const getItems = async () => {
        const gottenItems = await props.getFiles(props.user_id, props.page)
        setFiles(gottenItems[1].files)
        setFolders(gottenItems[1].folders)
    }

    useEffect(() => {
        if(props.user_id !== 0){
            getItems() 
        }
    }, [props.user_id, props.page])

    return (
        <div className="dashboard-content">
            <MDMCreateUpload/>
            <DashboardItemsContainerStyled cnt={folders.length + files.length} >
                {files.map(item => {
                    return <DashboardItem key={nanoid()} item={item} />
                })}
                {folders.map(item => {
                    return <DashboardItem key={nanoid()} item={item} />
                })}
            </DashboardItemsContainerStyled>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        user_id: state.profile.user_id
    }
}


export default connect(mapStateToProps, {getFiles})(DashboardMyDisk)


