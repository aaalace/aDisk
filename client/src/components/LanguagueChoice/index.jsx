import React, { useEffect } from "react"
import './style.scss'
import { LOCALES } from "../../i18n/locales"

import { LanguagueSelect } from "./styled"


const languages = [
    { name: 'EN', code: LOCALES.ENGLISH },
    { name: 'RU', code: LOCALES.RUSSIAN },
    { name: 'DE', code: LOCALES.GERMAN }
]
// customStyles={scroll === 0 ? {color: 'white', backgroundColor: '#444444'} : {color: '#444444'}}

export const LanguagueChoice = ({ currentLocale, handleChange, scrolled }) => {

    useEffect(() => {
        document.querySelector(`#styledSelect > option[value=${currentLocale}]`).setAttribute("selected", "selected");
    }, [])

    return (
        <LanguagueSelect scrolled={scrolled} className='languague_choice-container'>
            <div className='switcher' onChange={handleChange} value={currentLocale}>
                <select scrolled={scrolled} id="styledSelect" className="blueText">
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