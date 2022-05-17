import React from "react"
import './style.scss'
import { LanguagueChoice } from "../LanguagueChoice"

export const HomeFooter = () => {

    return (
        <div className='home-footer'>
            <div className="home-footer_row">
                <div className="terms-footer">
                    Terms of Use
                </div> 
                <div className="rights-footer">
                    &#169; 2022 aDisk 
                </div>
                <LanguagueChoice/>
            </div>
        </div>
    )
}