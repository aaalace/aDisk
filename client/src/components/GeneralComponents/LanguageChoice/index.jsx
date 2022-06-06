import React, { useEffect } from "react"
import './style.scss'
import { LOCALES } from "../../../i18n/locales"

import { LanguageSelect } from "./styled"


const languages = [
    { name: 'EN', code: LOCALES.ENGLISH },
    { name: 'RU', code: LOCALES.RUSSIAN },
    { name: 'DE', code: LOCALES.GERMAN }
]

export const LanguageChoice = ({ customStyles, currentLocale, handleChange, scrolled }) => {

    useEffect(() => {
        document.querySelector(`#styledSelect > option[value=${currentLocale}]`).setAttribute("selected", "selected");
    }, [])

    return (
        <LanguageSelect scrolled={scrolled} className='languague_choice-container'>
            <div className='switcher' onChange={handleChange} value={currentLocale}>
                <select id="styledSelect" className="whiteText" style={customStyles.select}>
                    {languages.map(({ name, code }) => (
                    <option key={code} value={code} style={customStyles.option}>
                        {name}
                    </option>
                    ))}
                </select>
            </div>
        </LanguageSelect>
    )
}