import React from "react"
// import { useState } from "react"
import './style.scss'

export const LanguagueChoice = (props) => {
    // const [opened, setOpened] = useState(false)

    return (
        <div className='languague_choice-container' style={props.customStyles}>
            <img src="../images/br.png" alt="eng" className="icon"/>
            <p className="name">English</p>
        </div>
    )
}