import React, { useState, useRef, useEffect } from 'react';
import './style.scss';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import { HomeHeader } from "../../components/HomeHeader";
import { HomeFooter } from '../../components/HomeFooter';
import ThreeFigure from '../../components/ThreeFigure';

import { 
    HomeBlock,
    HomeBlockInfo,
    HomeBlockImage,
    HomeBlockButton,
    HomeBlockName,
    HomeBlockDescription,
    PaymentCarouselStyled
} from './styled';

const Block = (props) => {
    const navigate = useNavigate()

    let stls_13 = {margin: '0 20px 0 20px'}
    if(props.id === 1){
        stls_13 = {backgroundImage: 'linear-gradient(120deg, #ffffff 30%, #000000 120%)'}
    }

    return(
        <div className="home-block-container" style={props.id % 2 === 0 ? {backgroundColor: '#f1f5f8'} : stls_13}>
            <HomeBlock id={props.id} className="home-block">
                {props.id % 2 === 0 && props.id !== 1 ? <HomeBlockImage id={props.id} className="home-block_image"/> : null}
                <HomeBlockInfo id={props.id} className="home-block_info">
                    <HomeBlockName id={props.id} className="heading">
                        Secure storage for your photo
                    </HomeBlockName>
                    <HomeBlockDescription id={props.id} className="description">
                        Enable auto-upload on your phone and Yandex Disk will store all your photos in their original resolution.
                    </HomeBlockDescription>
                    {props.id === 1 ? <HomeBlockButton id={props.id} className="home-button" onClick={() => navigate('/register')}><p>Get started</p></HomeBlockButton> : null}
                </HomeBlockInfo>
                {props.id === 1 ? <ThreeFigure/> : null}
                {props.id % 2 === 1 && props.id !== 1 ? <HomeBlockImage id={props.id} className="home-block_image"/> : null}
            </HomeBlock>
        </div>
    )
}

const HomeBlocksContainer = (props) => {

    return (
        <div className="home-blocks-container" ref={props.blocksRef}>
            <Block id={1} />
            <Block id={2} />
            <Block id={3} />
            <Block id={4} />
        </div>
      );
}

const PaymentCasrouselBlock = () => {
    return(
        <div className='payment-carousel-block'>
            ewfe
        </div>
    )
}

const PaymentCasrousel = (props) => {
    return (
        <PaymentCarouselStyled className='payment-carousel-container' ref={props.paymentRef}>
            <div className='payment-carousel-header'>
                <p className='top'>Subscribe to AD+ and get:</p>
                <p className='bottom'>Choose your subscription.</p>
            </div>
            <PaymentCasrouselBlock/>
        </PaymentCarouselStyled>
    )
}

const Home = () => {
    const navigate = useNavigate()

    const blocksRef = useRef(null)
    const paymentRef = useRef(null)

    const executePriceScroll = () => {
        paymentRef.current.scrollIntoView()
    }
    const executeHomeScroll = () => {
        blocksRef.current.scrollIntoView()
    }

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div className="home">
            <HomeHeader priceScrollFunc={executePriceScroll} homeScrollFunc={executeHomeScroll} />
            <HomeBlocksContainer blocksRef={blocksRef} />
            <PaymentCasrousel paymentRef={paymentRef}/>
            {scroll > 300 ? <button className="home-foot-button" onClick={() => navigate('/register')}><p>Get started</p></button> : null}
            <HomeFooter/>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(Home)
