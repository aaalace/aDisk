import React from 'react';
import './style.scss';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import { HomeHeader } from "../../components/HomeHeader";
import { HomeFooter } from '../../components/HomeFooter';
import ThreeFigure from '../../components/ThreeFigure';
import { useTransition } from "react";
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

    return(
        <div className="home-block-container" style={props.id % 2 === 1 ? {backgroundColor: '#f1f5f8'} : null}>
            <HomeBlock className="home-block">
                {props.id % 2 === 0 && props.id !== 1 ? <HomeBlockImage id={props.id} className="home-block_image"/> : null}
                <HomeBlockInfo id={props.id} className="home-block_info">
                    <HomeBlockName className="heading">
                        Secure storage for your photo
                    </HomeBlockName>
                    <HomeBlockDescription className="description">
                        Enable auto-upload on your phone and Yandex Disk will store all your photos in their original resolution.
                    </HomeBlockDescription>
                    <HomeBlockButton className="home-button" onClick={() => navigate('/register')}><p>Get started</p></HomeBlockButton>
                </HomeBlockInfo>
                {props.id === 1 ? <ThreeFigure/> : null}
                {props.id % 2 === 1 && props.id !== 1 ? <HomeBlockImage id={props.id} className="home-block_image"/> : null}
            </HomeBlock>
        </div>
    )
}

const HomeBlocksContainer = (props) => {

    return (
        <div className="home-blocks-container">
            <Block id={1} />
            <Block id={2} />
            <Block id={3} />
            <Block id={4} />
        </div>
      );
}

const PaymentCasrouselBlock = () => {
    return(
        <div>
            
        </div>
    )
}

const PaymentCasrousel = () => {
    return (
        <PaymentCarouselStyled className='payment-carousel-container'>
            <PaymentCasrouselBlock/>
        </PaymentCarouselStyled>
    )
}

const Home = (props) => {

    return (
      <div className="home">
            <HomeHeader />
            <HomeBlocksContainer />
            <PaymentCasrousel />
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
