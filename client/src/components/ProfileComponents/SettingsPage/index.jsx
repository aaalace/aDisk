import React, { useState } from "react"
import './style.scss'
import { SettingsContainer } from "./styled"
import PublicProfile from "./Pages/PublicProfile"
import AccountSettings from "./Pages/AccountSettings"
import { SettingsHeader, SettingsBlock } from "./styled"
import { FormattedMessage } from 'react-intl'

const SettingsPage = (props) => {

    const [chosenPage, setChosenPage] = useState(1)

    const chooseSettingsPage = (page) =>{
        switch(page){
            case 1:
                return <PublicProfile/>
            case 2:
                return <AccountSettings currentLocale={props.currentLocale} handleChange={props.handleChange}/>
            default: 
                return 'pub'
        }
    }

    return (
        <SettingsContainer className="settings-container">
            <SettingsHeader className="settings-header">
                <p onClick={() => setChosenPage(1)} className={chosenPage === 1 ? "active" : ""}><FormattedMessage id="sett_public_profile"/></p>
                <p onClick={() => setChosenPage(2)} className={chosenPage === 2 ? "active" : ""}><FormattedMessage id="sett_acc"/></p>
            </SettingsHeader>
            <SettingsBlock className="settings-block">
                {chooseSettingsPage(chosenPage)}
            </SettingsBlock>
        </SettingsContainer>
    )
}


export default SettingsPage