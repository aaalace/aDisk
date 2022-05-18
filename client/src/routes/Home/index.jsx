import React from 'react';
import './style.scss'
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import { HomeHeader } from "../../components/HomeHeader";
import { HomeFooter } from '../../components/HomeFooter';
import { 
    HomeBlock,
    HomeBlockInfo,
    HomeBlockImage,
    HomeBlockButton,
    HomeBlockName,
    HomeBlockDescription 
} from './styled';

const Block = (props) => {
    const navigate = useNavigate()

    return(
        <div className="home-block-container" style={props.id % 2 === 1 ? {backgroundColor: '#f1f5f8'} : null}>
            <HomeBlock className="home-block">
            {props.id % 2 === 0 ? <HomeBlockImage id={props.id} className="home-block_image"/> : null}
                <HomeBlockInfo id={props.id} className="home-block_info">
                    <HomeBlockName className="heading">
                        Secure storage for your photossdsdvdvsdvsdvdsv
                    </HomeBlockName>
                    <HomeBlockDescription className="description">
                        Enable auto-upload on your phone and Yandex Disk will store all your photos in their original resolution.
                    </HomeBlockDescription>
                    <HomeBlockButton className="home-button" onClick={() => navigate('/register')}><p>Get started</p></HomeBlockButton>
                </HomeBlockInfo>
                {props.id % 2 === 1 ? <HomeBlockImage id={props.id} className="home-block_image"/> : null}
            </HomeBlock>
        </div>
    )
}

const HomeBlocksContainer = (props) => {

    return (
        <div className="home-blocks-container">
            <Block responsive={props.responsive} id={1} />
            <Block responsive={props.responsive} id={2} />
            <Block responsive={props.responsive} id={3} />
            <Block responsive={props.responsive} id={4} />
        </div>
      );
}

const Home = (props) => {

    return (
      <div className="home">
            <HomeHeader responsive={props.responsive}/>
            <HomeBlocksContainer responsive={props.responsive}/>
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
