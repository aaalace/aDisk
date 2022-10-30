import React from "react"

import { DashboardItemStyled, DbItemPreviewStyled, DbItemNameStyled, DbItemPreviewImgStyled } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

const DashboardItem = (props) => {
    const item = props.item

    const getItemPreview = () => {
        if(item.type === 'image'){
            return <DbItemPreviewImgStyled alt="" src={`${process.env.REACT_APP_API_URL}/storage/get_img_preview/${props.user_id}/${props.page}/${item.name.split('#')[0]}/${item.name.split('#')[1]}/${item.name.split('#')[2]}`}></DbItemPreviewImgStyled>
        }
        if(item.type === 'folder'){
            return <FontAwesomeIcon className="icon" icon={faFolder} style={{color: 'var(--profile-header-head-prewiew)'}}/>
        }
        if(item.type === 'file'){
            return <p>.{item.format}</p>
        }
    }

    return (
        <DashboardItemStyled>
            <DbItemPreviewStyled format={item.format}>
                {getItemPreview()}
            </DbItemPreviewStyled>
            <DbItemNameStyled className="item-name">
                {
                    item.type === 'image' ?
                    <p>{item.name.split('#')[2]}</p> :
                    <p>{item.name}</p>
                }
            </DbItemNameStyled>
        </DashboardItemStyled>
    );
}


export default DashboardItem
