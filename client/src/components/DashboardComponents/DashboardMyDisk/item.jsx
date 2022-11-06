import React from "react"

import { DashboardItemStyled, DashboardFolderItemStyled, DbItemPreviewStyled, DbFolderItemPreviewStyled, DbItemNameStyled, DbFolderItemNameStyled, DbItemPreviewImgStyled } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { installFile } from "../../../actions/dashboard";

const DashboardItem = (props) => {
    const item = props.item

    const getItemPreview = () => {
        if(item.type === 'image'){
            if(props.folderFile){
                console.log(props.parentFolder)
                return <p>.{item.format}</p>
            }
            return <DbItemPreviewImgStyled alt="" src={`${process.env.REACT_APP_API_URL}/storage/get_img_preview/${props.user_id}/${props.page}/${item.name.split('#')[0]}/${item.name.split('#')[1]}/${item.name.split('#')[2]}/${item.name.split('#')[3]}`}></DbItemPreviewImgStyled>
        }
        if(item.type === 'folder'){
            return <FontAwesomeIcon className="icon" icon={faFolder} style={{color: 'var(--profile-header-head-prewiew)'}}/>
        }
        if(item.type === 'file'){
            return <p>.{item.format}</p>
        }
    }
    
    const installFile = async () => {
        await props.installFile(props.user_id, props.page, item.name)
    }

    const openFolder = () => {
        props.setOpenedFolderName(item.name)
    }

    const fileOpen = () => {
        switch(item.type){
            case 'image':
                installFile()
            case 'file':
                installFile()
            case 'folder':
                openFolder()
            default:
                return false
        }
    }

    return (
        <>
            {props.folderFile ? 
                <DashboardFolderItemStyled className='folderFileItem' onClick={() => fileOpen()}>
                    <DbFolderItemPreviewStyled format={item.format}>
                        {getItemPreview()}
                    </DbFolderItemPreviewStyled>
                    <DbFolderItemNameStyled className="item-name">
                        <p>{item.name.split('#')[3]}</p>
                    </DbFolderItemNameStyled>
                </DashboardFolderItemStyled>
                :
                <DashboardItemStyled className='item' onClick={() => fileOpen()}>
                    <DbItemPreviewStyled format={item.format}>
                        {getItemPreview()}
                    </DbItemPreviewStyled>
                    <DbItemNameStyled className="item-name">
                        <p>{item.name.split('#')[3]}</p>
                    </DbItemNameStyled>
                </DashboardItemStyled>
            }
        </>
    );
}



const mapStateToProps = (state) => {
    return {
        user_id: state.profile.user_id
    }
}


export default connect(mapStateToProps, {installFile})(DashboardItem)
