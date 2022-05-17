import React from "react"
// import { useState } from "react"
import './style.scss'

export const LanguagueChoice = () => {
    // const [opened, setOpened] = useState(false)
    
    return (
        <div className='languague_choice-container'>
            <img src="../images/br.png" alt="eng" className="icon"/>
            <p className="name">English</p>
        </div>
    )
}