import React, { useEffect } from "react"
import './style.scss'
import { LOCALES } from "../../../i18n/locales"

import { LanguagueSelect } from "./styled"


const languages = [
    { name: 'EN', code: LOCALES.ENGLISH },
    { name: 'RU', code: LOCALES.RUSSIAN },
    { name: 'DE', code: LOCALES.GERMAN }
]

export const LanguagueChoice = ({ customStyles, currentLocale, handleChange, scrolled }) => {

    useEffect(() => {
        document.querySelector(`#styledSelect > option[value=${currentLocale}]`).setAttribute("selected", "selected");
    }, [])

    return (
        <LanguagueSelect scrolled={scrolled} className='languague_choice-container' style={customStyles}>
            <div className='switcher' onChange={handleChange} value={currentLocale}>
                <select id="styledSelect" className="blueText" style={customStyles}>
                    {languages.map(({ name, code }) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                    ))}
                </select>
            </div>
        </LanguagueSelect>
    )
}