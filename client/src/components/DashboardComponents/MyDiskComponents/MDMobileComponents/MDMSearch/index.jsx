import React, { useState } from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Microphone from "../../Microphone"

const MDMSearch = (props) => {

    const [request, setRequest] = useState('')

    return (
        <div className="msmsearching_container" style={props.msmsOpened ? {display: 'flex'} : {display: 'none'}}>
            <input value={request} onChange={(e) => setRequest(e.value)} className="msms-search-input" type='text' placeholder='Search'/>
            <Microphone setListenedText={setRequest}/>
            <button className="msms-search-button" type='button'><FontAwesomeIcon className="icon" icon={faMagnifyingGlass}/></button>
        </div>
    );
}


export default MDMSearch

