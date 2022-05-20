import React from "react"
import './style.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FormattedMessage } from 'react-intl'

import { PaymentCarouselStyled, ADPLUSstyled, Standardstyled, PaymentCarouselBlockStyled } from "./styled"

const CommonSubscriptionBlock = (props) => {

    return(
        <Standardstyled className='carousel-block' data-aos='faded-top'>
            <div className="carousel-block-header">
                <i className="fas fa-certificate icon"></i>
                <p className="name">Standard</p>
            </div>
            <div className="carousel-block-body">
                <ul className="list">
                    <li><i className="fas fa-check lft" style={{color: '#79d246', marginRight: '5px'}}></i><b>10&nbsp;</b><FormattedMessage id='home_payment_body_1'/></li>
                    <li><i className="fa fa-close lft"></i><FormattedMessage id='home_payment_body_2'/></li>
                    <li><i className="fa fa-close lft"></i><FormattedMessage id='home_payment_body_3'/></li>
                </ul>
                <hr style={{margin: '20px 0', color: '#79d246'}}></hr>
                <div className="price-container">
                    <p className="num">0</p>
                    <p className="adict"><i class="fas fa-ruble-sign"></i>/<FormattedMessage id='home_payment_month'/></p>
                </div>
            </div>
        </Standardstyled>
    )
}

const ADPLUSSubscriptionBlock = (props) => {

    return(
        <ADPLUSstyled className='carousel-block' data-aos='faded-left'>
            <div className="carousel-block-header-ADPLUS">
                <i className="fas fa-certificate icon"></i>
                <p className="name">AD+</p>
            </div>
            <div className="carousel-block-body-ADPLUS">
                <ul className="list">
                    <li><i className="fas fa-check lft"></i><b style={{color: '#455EB5'}}>100&nbsp;</b><FormattedMessage id='home_payment_body_1'/></li>
                    <li><i className="fas fa-check lft"></i><FormattedMessage id='home_payment_body_2'/></li>
                    <li><i className="fas fa-check lft"></i><FormattedMessage id='home_payment_body_3'/></li>
                </ul>
                <hr style={{margin: '20px 0', color: '#79d246'}}></hr>
                <div className="price-container">
                    <p className="num">
                        60
                    </p>
                    <p className="adict">
                        <i class="fas fa-ruble-sign"></i>/month
                    </p>
                </div>
            </div>
        </ADPLUSstyled>
    )
}

const PaymentCasrouselBlock = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        Aos.init({duration: 3000})
    }, [])

    const navigateFromCarousel = () => {
        navigate('/register')
    }

    return(
        <PaymentCarouselBlockStyled className='payment-carousel-block'>
            <CommonSubscriptionBlock clickFunc={navigateFromCarousel}/>
            <ADPLUSSubscriptionBlock clickFunc={navigateFromCarousel}/>
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