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

    const [readyToUpdate, setReadyToUpdate] = useState(false)
    useEffect(() => {
        if(props.user_id !== 0){
            if(props.page === 'shared'){
                if(props.items['shared'].folders.length === 0 && props.items['shared'].files.length === 0){
                    getItems() 
                }else{
                    setFiles(props.items['shared'].files)
                    setFolders(props.items['shared'].folders)
                }
            }
            if(props.page !== 'shared'){
                if(props.items['private'].folders.length === 0 && props.items['private'].files.length === 0){
                    getItems()
                }else{
                    setFiles(props.items['private'].files)
                    setFolders(props.items['private'].folders)
                }
            }
        }
    }, [props.page, readyToUpdate])

    useEffect(() => {
        if(props.user_id !== 0){
            setReadyToUpdate(true)
        }
    }, [props.user_id])

    return (
        <div className="dashboard-content">
            <MDMCreateUpload/>
            <DashboardItemsContainerStyled cnt={folders.length + files.length} >
            {folders.map(item => {
                    return <DashboardItem key={nanoid()} item={item} page={props.page} user_id={props.user_id}/>
                })}
            {files.map(item => {
                return <DashboardItem key={nanoid()} item={item} page={props.page} user_id={props.user_id}/>
            })}
            </DashboardItemsContainerStyled>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        user_id: state.profile.user_id,
        items: state.dashboard
    }
}


export default connect(mapStateToProps, {getFiles})(DashboardMyDisk)


