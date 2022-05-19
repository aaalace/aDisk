import React, { useState, useEffect } from "react"
import './style.scss'
import { useNavigate } from "react-router-dom"
import { LanguagueChoice } from "../LanguagueChoice"
import { useMediaQuery } from "react-responsive"

export const HomeHeader = (props) => {
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
                <i className="fas fa-moon icon" style={{fontSize: '24px'}}></i>
            </div> : null }
            <div className="home-header_row">
                <div onClick={props.homeScrollFunc} className="icon"><p style={{color: '#5643CC'}} className="icon">a</p>Disk</div>
                { !Mobile ? 
                <div className="buttons-menu">
                    <button onClick={() => navigate('/login')} type="button" className="home-header_sign-in"><i className='fas fa-user-alt'></i>&nbsp;&nbsp;Sign in</button>
                    <button onClick={props.priceScrollFunc} type="button" className="home-header_payment" style={scroll === 0 ? {color: 'white'} : {color: '#444444'}}><i class='fas fa-coins'></i>&nbsp;&nbsp;AD+</button>
                </div> : 
                <div className="buttons-menu-mobile">
                    <button onClick={() => navigate('/login')} type="button" className="home-header_sign-in"  style={scroll === 0 ? {color: 'white'} : {color: '#444444'}}><i className='fas fa-user-alt'></i></button>
                    <button onClick={props.priceScrollFunc} type="button" className="home-header_payment" style={scroll === 0 ? {color: 'white'} : {color: '#444444'}}><i class='fas fa-coins'></i></button>
                </div>
                }
            </div>
            { !Mobile ? <div className="languague-choice-container">
                <LanguagueChoice customStyles={scroll === 0 ? {color: 'white'} : {color: '#444444'}}/>
            </div> : null}
        </div>
    )
}