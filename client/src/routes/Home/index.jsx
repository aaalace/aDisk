import React, { useState, useRef, useEffect } from 'react';
import './style.scss';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { useMediaQuery } from 'react-responsive';

import HomeHeader from "../../components/HomeComponents/HomeHeader";
import PaymentCasrousel from '../../components/HomeComponents/PaymentCarousel';
import ThreeFigure from '../../components/HomeComponents/ThreeFigure';

import {
    HomeBlockContainer,
    HomeBlock,
    HomeBlockInfo,
    HomeBlockImage,
    HomeBlockButton,
    HomeBlockName,
    HomeBlockDescription
} from './styled';

const Block = (props) => {
    const navigate = useNavigate()

    const Mobile = useMediaQuery({
        query: '(max-width: 768px)'
    })
    
    let bottomButtonMessageId = 'get_started_btn'
    let bottomButtonNavigate = '/register'
    if(props.isAuthenticated){
        bottomButtonMessageId = 'open_disk_btn'
        bottomButtonNavigate = '/dashboard/my-disk'
    }

    const nameSwitch = (id) => {
        switch(id) {
            case 1:
                return <FormattedMessage id='first_box_name'/>;
            case 2:
                return <FormattedMessage id='second_box_name'/>;
            case 3:
                return <FormattedMessage id='third_box_name'/>;
            case 4:
                return <FormattedMessage id='fourth_box_name'/>;
            default:
                return <FormattedMessage id='first_box_name'/>;
          }
    }

    const descSwitch = (id) => {
        switch(id) {
            case 1:
                return <FormattedMessage id='first_box_desc'/>;
            case 2:
                return <FormattedMessage id='second_box_desc'/>;
            case 3:
                return <FormattedMessage id='third_box_desc'/>;
            case 4:
                return <FormattedMessage id='fourth_box_desc'/>;
            default:
                return <FormattedMessage id='first_box_desc'/>;
          }
    }

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }

    let options = { threshold: [0.9] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.home-block_info');
    for (let elm of elements) {
        observer.observe(elm);
    }

    return(
        <HomeBlockContainer id={props.id} className="home-block-container">
            <HomeBlock id={props.id} className="home-block">
                {props.id % 2 === 0 && props.id !== 1 && !Mobile ? <HomeBlockImage id={props.id} className="home-block_image"/> : null}
                <HomeBlockInfo id={props.id} className="home-block_info">
                    <HomeBlockName id={props.id} className="heading">
                        {nameSwitch(props.id)}
                    </HomeBlockName>
                    <HomeBlockDescription id={props.id} className="description">
                        {descSwitch(props.id)}
                    </HomeBlockDescription>
                    {props.id === 1 ? <HomeBlockButton id={props.id} className="home-button" onClick={() => navigate(bottomButtonNavigate)}><p><FormattedMessage id={bottomButtonMessageId}/></p></HomeBlockButton> : null}
                </HomeBlockInfo>
                {props.id === 1 ? <ThreeFigure/> : null}
                {props.id % 2 === 1 && props.id !== 1 && !Mobile ? <HomeBlockImage id={props.id} className="home-block_image"/> : null}
                {props.id !== 1 && Mobile ? <HomeBlockImage id={props.id} className="home-block_image"/> : null}
            </HomeBlock>
        </HomeBlockContainer>
    )
}

const HomeBlocksContainer = (props) => {

    return (
        <div className="home-blocks-container" ref={props.blocksRef}>
            <Block id={1} isAuthenticated={props.isAuthenticated} />
            <div className="home-blocks-header"><p><FormattedMessage id='features'/></p></div>
            <Block id={2} />
            <Block id={3} />
            <Block id={4} />
        </div>
      );
}

const Home = (props) => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const Mobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    const blocksRef = useRef(null)
    const paymentRef = useRef(null)

    const executePriceScroll = () => {
        const prY = paymentRef.current.offsetTop
        window.scrollTo(0, prY - 64)
    }
    const executeHomeScroll = () => {
        blocksRef.current.scrollIntoView()
    }

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const [scroll, setScroll] = useState(0)

    let bottomButtonMessageId = 'get_started_btn'
    let bottomButtonNavigate = '/register'
    if(props.isAuthenticated){
        bottomButtonMessageId = 'open_disk_btn'
        bottomButtonNavigate = '/dashboard/my-disk'
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div className="home">
            <HomeHeader priceScrollFunc={executePriceScroll} homeScrollFunc={executeHomeScroll} currentLocale={props.currentLocale} handleChange={props.handleChange}/>
            <HomeBlocksContainer blocksRef={blocksRef} isAuthenticated={props.isAuthenticated} />
            <PaymentCasrousel paymentRef={paymentRef} />
            {scroll > 300 || Mobile ? 
                <button className="home-foot-button" onClick={() => navigate(bottomButtonNavigate)}><p><FormattedMessage id={bottomButtonMessageId}/></p></button> 
            : 
                null
            }
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(Home)
