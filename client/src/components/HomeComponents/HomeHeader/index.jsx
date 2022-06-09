import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import './style.scss'
import { useNavigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { FormattedMessage } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faUserAlt } from '@fortawesome/free-solid-svg-icons'

import ThemeSwitch from "../../GeneralComponents/ThemeSwitch"
import { LanguageChoice } from "../../GeneralComponents/LanguageChoice"

import { 
    HomeHeaderStyled,
    HomeHeaderPayment 
} from "./styled"

const HomeHeader = (props) => {
    const navigate = useNavigate()

    const Mobile = useMediaQuery({
        query: '(max-width: 769px)'
    })

    const langStyles = {
        select: {color: 'var(--scrolled_pay)'},
        option: {color: 'var(--scrolled_pay)', backgroundColor: 'var(--white_to_black)'}
    }
    
    const [scroll, setScroll] = useState(0)

    const setUserThemeIcon = () => {
        const userTheme = localStorage.getItem('theme')
        if(userTheme === 'light'){
            return false
        }
        return true
    }

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const [appTheme, setAppTheme] = useState(setUserThemeIcon)

    const handleThemeChange = (changeTo) => {
        if(changeTo) {
            setAppTheme(true)
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark')
        } 
        else {
            setAppTheme(false)
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light')
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
                    <ThemeSwitch checked={appTheme} onChange={() => handleThemeChange(!appTheme)}/>
                </div>
            : null }
            <div className="home-header_row">
                <div onClick={props.homeScrollFunc} className="icon"><p className="icon">a</p>Disk</div>
                { !Mobile ? 
                    <div className="buttons-menu">
                        {props.isAuthenticated ? 
                             <img className="profile-icon" onClick={() => navigate('/profile/account')} alt="" src={`${process.env.REACT_APP_API_URL}/user_profile/get_user_avatar/${props.avatar_global}`}></img>
                        : 
                            <button onClick={() => navigate('/login/entry')} type="button" className="home-header_sign-in"><FontAwesomeIcon icon={faUserAlt}/>&nbsp;&nbsp;<FormattedMessage id='login_button'/></button>
                        }
                        <HomeHeaderPayment scrolled={scroll === 0 ? false : true} onClick={props.priceScrollFunc} type="button" className="home-header_payment"><FontAwesomeIcon icon={faCoins}/>&nbsp;&nbsp;AD+</HomeHeaderPayment>
                    </div> 
                : 
                    <div className="buttons-menu-mobile">
                        <div className="languague-choice-container" style={{marginRight: '0px'}}>
                            <LanguageChoice customStyles={langStyles} scrolled={scroll === 0 ? false : true} handleChange={props.handleChange} currentLocale={props.currentLocale}/>
                        </div> 
                        <div className="theme-choice-container">
                            <ThemeSwitch checked={appTheme} onChange={() => handleThemeChange(!appTheme)}/>
                        </div>
                        {props.isAuthenticated ? 
                             <img className="profile-icon" alt="" src={`${process.env.REACT_APP_API_URL}/user_profile/get_user_avatar/${props.avatar_global}`}></img>
                        : 
                            <button onClick={() => navigate('/login/entry')} type="button" className="home-header_sign-in"><FontAwesomeIcon icon={faUserAlt}/></button>
                        }
                    </div>
                }
            </div>
            { !Mobile ? 
                <div className="languague-choice-container">
                    <LanguageChoice customStyles={langStyles} scrolled={scroll === 0 ? false : true} handleChange={props.handleChange} currentLocale={props.currentLocale}/>
                </div> 
            : null }
        </HomeHeaderStyled>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        avatar_global: state.profile.avatar
    }
}

export default connect(mapStateToProps, null)(HomeHeader)