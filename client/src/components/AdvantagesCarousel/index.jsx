import React from "react"
import './style.scss'
import { Link } from 'react-router-dom';
import { CarouselContainer, CarouselDescription } from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const AdvantagesCarousel = (props) => {

    return (
      <CarouselContainer className="adv-carousel">
            <div className="adv-carousel-name-container">
                <p className="icon">aDisk</p>
            </div>
            <CarouselDescription className="adv-carousel-description-container">
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </CarouselDescription>
            <div className="adv-carousel-bar-container">
                <Link className="bar" to='/'><FontAwesomeIcon icon={faHome}/>&nbsp;&nbsp;Home</Link>
                <Link className="bar" to='/login'><FontAwesomeIcon icon={faUserAlt}/>&nbsp;&nbsp;Login</Link>
                <Link className="bar" to='/register'><FontAwesomeIcon icon={faUserPlus}/>&nbsp;&nbsp;Register</Link>
            </div>
      </CarouselContainer>
    );
}

export default AdvantagesCarousel