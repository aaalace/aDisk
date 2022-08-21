import React, { useState, useEffect } from "react"
import './style.scss'

import MDMCreateUpload from "../MyDiskComponents/MDMobileComponents/MDMCreateUpload"

import { DashboardItemsContainerStyled } from "./styled"

import DashboardItem from "./item"

const DashboardMyDisk = () => {

    const [items, setItems] = useState([])

    const getItems = () => {
        const gottenItems = [
            {
                name: 'file.pptx',
                type: 'file',
                format: 'pptx'
            },
            {
                name: 'image.png',
                type: 'image',
                format: 'png',
            },
            {
                name: 'file.txt',
                type: 'file',
                format: 'txt'
            },
            {
                name: 'file.xlsx',
                type: 'file',
                format: 'xlsx'
            },
            {
                name: 'file.pdf',
                type: 'file',
                format: 'pdf'
            },
            {
                name: 'file.docx',
                type: 'file',
                format: 'docx'
            },
            {
                name: 'file.py',
                type: 'file',
                format: 'py'
            },
        ]
        setItems(gottenItems)
        
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className="dashboard-content">
            <MDMCreateUpload/>
            <DashboardItemsContainerStyled cnt={items.length} >
                {items.map(item => {
                    return <DashboardItem item={item} />
                })}
            </DashboardItemsContainerStyled>
        </div>
    );
}


export default DashboardMyDisk

