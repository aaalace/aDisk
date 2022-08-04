import React from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const MDMSearch = (props) => {

    return (
        <div className="msmsearching_container" style={props.msmsOpened ? {display: 'flex'} : {display: 'none'}}>
            <input className="msms-search-input" type='text' placeholder='Search'/>
            <button className="msms-search-button" type='button'><FontAwesomeIcon className="icon" icon={faMagnifyingGlass}/></button>
        </div>
    );
}


export default MDMSearch

