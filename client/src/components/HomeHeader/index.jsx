import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import './style.scss'
import { Link, useNavigate } from "react-router-dom"
import { LanguagueChoice } from "../LanguagueChoice"
import { useMediaQuery } from "react-responsive"
import { FormattedMessage } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faUserAlt, faMoon } from '@fortawesome/free-solid-svg-icons'

const HomeHeader = (props) => {
    const navigate = useNavigate()

    const Mobile = useMediaQuery({
        query: '(max-width: 769px)'
    })

    const movedHeaderStyle = {
        borderBottom: '1px solid #44444430',
        transitionDuration: '.6s',
        zIndex: '3',
        backgroundColor: 'white'
    }

    const topHeaderStyle = {
        padding: '30px 0 5px 0',
        backgroundColor: 'transparent'
    }

    const [scroll, setScroll] = useState(0)

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <div style={scroll === 0 ? topHeaderStyle : movedHeaderStyle} className='home-header' onScroll={handleScroll}>
            { !Mobile ? <div className="theme-choice-container">
            <FontAwesomeIcon icon={faMoon} style={{fontSize: '24px'}}/>
            </div> : null }
            <div className="home-header_row">
                <div onClick={props.homeScrollFunc} className="icon"><p style={{color: '#5643CC'}} className="icon">a</p>Disk</div>
                { !Mobile ? 
                <div className="buttons-menu">
                    {props.isAuthenticated ? 
                        <img className="profile-icon" alt="" src="../images/default-image.jpg" onClick={() => navigate('/profile')}></img>
                    : 
                        <button onClick={() => navigate('/login')} type="button" className="home-header_sign-in"><FontAwesomeIcon icon={faUserAlt}/>&nbsp;&nbsp;<FormattedMessage id='login_button'/></button>
                    }
                    <button onClick={props.priceScrollFunc} type="button" className="home-header_payment" style={scroll === 0 ? {color: 'white'} : {color: '#444444'}}><FontAwesomeIcon icon={faCoins}/>&nbsp;&nbsp;AD+</button>
                </div> : 
                <div className="buttons-menu-mobile">
                   {props.isAuthenticated ? 
                        <img className="profile-icon" alt="" src="../images/default-image.jpg" onClick={() => navigate('/profile')}></img>
                    : 
                        <button onClick={() => navigate('/login')} type="button" className="home-header_sign-in"><FontAwesomeIcon icon={faUserAlt}/>&nbsp;&nbsp;<FormattedMessage id='login_button'/></button>
                    }
                </div>
                }
            </div>
            { !Mobile ? <div className="languague-choice-container">
                <LanguagueChoice handleChange={props.handleChange} currentLocale={props.currentLocale} customStyles={scroll === 0 ? {color: 'white', backgroundColor: '#444444'} : {color: '#444444'}}/>
            </div> : null}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(HomeHeader)