import React from "react"
import './style.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FormattedMessage } from 'react-intl'
import { useMediaQuery } from "react-responsive"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faClose, faCertificate, faRubleSign } from '@fortawesome/free-solid-svg-icons'
import { PaymentCarouselStyled, ADPLUSstyled, Standardstyled, PaymentCarouselBlockStyled } from "./styled"

const CommonSubscriptionBlock = (props) => {
    const Mobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    return(
        <Standardstyled className='carousel-block' data-aos={Mobile ? 'zoom-in' : 'zoom-in-right'}>
            <div className="carousel-block-header">
                <FontAwesomeIcon className="icon" icon={faCertificate}/>
                <p className="name">Standard</p>
            </div>
            <div className="carousel-block-body">
                <ul className="list">
                    <li><FontAwesomeIcon icon={faCheck} style={{color: '#79d246', marginRight: '5px'}}/><b>10&nbsp;</b><FormattedMessage id='home_payment_body_1'/></li>
                    <li><FontAwesomeIcon icon={faClose} style={{color: '#c81b1b', marginRight: '5px'}}/><FormattedMessage id='home_payment_body_2'/></li>
                    <li><FontAwesomeIcon icon={faClose} style={{color: '#c81b1b', marginRight: '5px'}}/><FormattedMessage id='home_payment_body_3'/></li>
                </ul>
                <hr style={{margin: '20px 0', color: '#79d246'}}></hr>
                <div className="price-container">
                    <p className="num">0</p>
                    <p className="adict"><FontAwesomeIcon icon={faRubleSign}/></p>
                </div>
            </div>
        </Standardstyled>
    )
}

const ADPLUSSubscriptionBlock = () => {
    const Mobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    return(
        <ADPLUSstyled className='carousel-block' data-aos={Mobile ? 'zoom-in' : 'zoom-in-left'}>
            <div className="carousel-block-header-ADPLUS">
                <FontAwesomeIcon className="icon" icon={faCertificate}/>
                <p className="name">AD+</p>
            </div>
            <div className="carousel-block-body-ADPLUS">
                <ul className="list">
                    <li><FontAwesomeIcon icon={faCheck} style={{color: '#79d246', marginRight: '5px'}}/><b style={{color: '#5643CC'}}>100&nbsp;</b><FormattedMessage id='home_payment_body_1'/></li>
                    <li><FontAwesomeIcon icon={faCheck} style={{color: '#79d246', marginRight: '5px'}}/><FormattedMessage id='home_payment_body_2'/></li>
                    <li><FontAwesomeIcon icon={faCheck} style={{color: '#79d246', marginRight: '5px'}}/><FormattedMessage id='home_payment_body_3'/></li>
                </ul>
                <hr style={{margin: '20px 0', color: '#79d246'}}></hr>
                <div className="price-container">
                    <p className="num">
                        60
                    </p>
                    <p className="adict">
                        <FontAwesomeIcon icon={faRubleSign}/>
                    </p>
                </div>
            </div>
        </ADPLUSstyled>
    )
}

const PaymentCasrouselBlock = () => {
    const navigate = useNavigate()

    Aos.init({duration: 2000, once: true})

    const navigateFromCarousel = () => {
        navigate('/register')
    }

    return(
        <PaymentCarouselBlockStyled className='payment-carousel-block'>
            <ADPLUSSubscriptionBlock clickFunc={navigateFromCarousel}/>
            <CommonSubscriptionBlock clickFunc={navigateFromCarousel}/>
        </PaymentCarouselBlockStyled>
    )
}

const PaymentCasrousel = (props) => {

    return (
        <PaymentCarouselStyled className='payment-carousel-container' ref={props.paymentRef}>
            <div className='payment-carousel-header'>
                <p className='top'>AD+</p>
                <p className='bottom'><FormattedMessage id='home_payment_header'/></p>
            </div>
            <PaymentCasrouselBlock/>
        </PaymentCarouselStyled>
    )
}

export default PaymentCasrousel