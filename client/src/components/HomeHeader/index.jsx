import React, { useState, useEffect } from "react"
import './style.scss'
import { useNavigate } from "react-router-dom"

export const HomeHeader = () => {
    const navigate = useNavigate()

    const movedHeaderStyle = {
        borderBottom: '1px solid #44444430',
        transitionDuration: '.6s',
        zIndex: '3'
    }

    const topHeaderStyle = {
        padding: '30px 0 5px 0',
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
            <div className="home-header_row">
                <div className="icon"><p style={{color: '#5643CC'}} className="icon">a</p>Disk</div>
                <button onClick={() => navigate('/login')} type="button" className="home-header_sign-in"><i className='fas fa-user-alt'></i>&nbsp;&nbsp;Sign in</button>
            </div>
        </div>
    )
}