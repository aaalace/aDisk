import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import './style.scss'
import { useNavigate } from "react-router-dom"
import { LanguagueChoice } from "../LanguagueChoice"
import { useMediaQuery } from "react-responsive"
import { FormattedMessage } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { faCoins, faUserAlt } from '@fortawesome/free-solid-svg-icons'

import { 
    HomeHeaderStyled,
    HomeHeaderPayment } from "./styled"

const HomeHeader = (props) => {
    const navigate = useNavigate()

    const Mobile = useMediaQuery({
        query: '(max-width: 769px)'
    })
    
    const [scroll, setScroll] = useState(0)

    const setUserThemeIcon = () => {
        const userTheme = localStorage.getItem('theme')
        if(userTheme === 'light'){
            return true
        }
        return false
    }

    const [appTheme, setAppTheme] = useState(setUserThemeIcon)

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleThemeChange = (changeTo) => {
        if(changeTo) {
            setAppTheme(true)
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light')
        } 
        else {
            setAppTheme(false)
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark')
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <HomeHeaderStyled scrolled={scroll === 0 ? false : true} className='home-header' onScroll={handleScroll}>
            { !Mobile ? 
                <div className="theme-choice-container">
                    <DarkModeSwitch
                        moonColor="black"
                        sunColor="white"
                        checked={appTheme}
                        onChange={handleThemeChange}
                        size={24}
                    />
                </div>
            : null }
            <div className="home-header_row">
                <div onClick={props.homeScrollFunc} className="icon"><p className="icon">a</p>Disk</div>
                { !Mobile ? 
                    <div className="buttons-menu">
                        {props.isAuthenticated ? 
                            <img className="profile-icon" alt="" src="../images/default-image.jpg" onClick={() => navigate('/profile')}></img>
                        : 
                            <button onClick={() => navigate('/login')} type="button" className="home-header_sign-in"><FontAwesomeIcon icon={faUserAlt}/>&nbsp;&nbsp;<FormattedMessage id='login_button'/></button>
                        }
                        <HomeHeaderPayment scrolled={scroll === 0 ? false : true} onClick={props.priceScrollFunc} type="button" className="home-header_payment"><FontAwesomeIcon icon={faCoins}/>&nbsp;&nbsp;AD+</HomeHeaderPayment>
                    </div> 
                : 
                    <div className="buttons-menu-mobile">
                    {props.isAuthenticated ? 
                            <img className="profile-icon" alt="" src="../images/default-image.jpg" onClick={() => navigate('/profile')}></img>
                        : 
                            <button onClick={() => navigate('/login')} type="button" className="home-header_sign-in"><FontAwesomeIcon icon={faUserAlt}/>&nbsp;&nbsp;<FormattedMessage id='login_button'/></button>
                        }
                    </div>
                }
            </div>
            { !Mobile ? 
                <div className="languague-choice-container">
                    <LanguagueChoice scrolled={scroll === 0 ? false : true} handleChange={props.handleChange} currentLocale={props.currentLocale}/>
                </div> 
            : null }
        </HomeHeaderStyled>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(HomeHeader)