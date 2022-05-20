import React from "react"
import './style.scss'
import { LOCALES } from "../../i18n/locales"


const languages = [
    { name: 'EN', code: LOCALES.ENGLISH },
    { name: 'RU', code: LOCALES.RUSSIAN },
    { name: 'DE', code: LOCALES.GERMAN }
  ]

export const LanguagueChoice = ({ customStyles, currentLocale, handleChange }) => {

    return (
        <div className='languague_choice-container' style={customStyles}>
            {/* <img src="../images/br.png" alt="eng" className="icon"/>
            <p className="name">En</p> */}
            <div className='switcher' onChange={handleChange} value={currentLocale}>
                <select id="styledSelect" className="blueText" style={{...customStyles}}>
                    {languages.map(({ name, code }) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                    ))}
                </select>
            </div>
        </div>
    )
}