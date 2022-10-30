import React from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons'

const TopMenuBar = () => {

    return (
        <div className="top-menu-bar">
            <div className="tmb-wid">
                <FontAwesomeIcon className="icon" icon={faTrash}/>
                <p>Recycle bin</p>
            </div>
        </div>
    );
}


export default TopMenuBar

