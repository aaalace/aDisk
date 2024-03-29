import React from "react"
import './style.scss'
import { Link } from 'react-router-dom';
import { CarouselContainer, CarouselDescription } from "./styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FormattedMessage } from 'react-intl'

import { LanguageChoice } from "../../GeneralComponents/LanguageChoice";

const AdvantagesCarousel = (props) => {

    const langStyles = {
        select: {color: 'white'},
        option: {color: 'white', backgroundColor: 'var(--violet_to_black)'}
    }

    return (
      <CarouselContainer className="advant-carousel">
            <div className="adv-carousel-name-container">
                <p className="icon">aDisk</p>
                <div className="adv-workbtns-cont">
                <LanguageChoice currentLocale={props.currentLocale} handleChange={props.handleChange} customStyles={langStyles}/>
                </div>
            </div>
            <CarouselDescription className="adv-carousel-description-container">
                <p className="desc"><FormattedMessage id='adv_text'/></p>
            </CarouselDescription>
            <div className="adv-carousel-bar-container">
                <Link className="bar" to='/'><FontAwesomeIcon icon={faHome} style={{fontSize: '24px'}}/></Link>
                <Link className="bar" to='/login/entry'><FontAwesomeIcon icon={faUserAlt}/>&nbsp;&nbsp;<FormattedMessage id='adv_login'/></Link>
                <Link className="bar" to='/register'><FontAwesomeIcon icon={faUserPlus}/>&nbsp;&nbsp;<FormattedMessage id='adv_reg'/></Link>
            </div>
      </CarouselContainer>
    );
}

export default AdvantagesCarousel