import React from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import './style.scss'
import { HomeHeader } from "../../components/HomeHeader";
import { HomeFooter } from '../../components/HomeFooter';

const HomeBlocksContainer = (props) => {
    const navigate = useNavigate()

    return (
        <div className="home-blocks-container">

            <div className="home-block-container" style={{backgroundColor: '#f1f5f8'}}>
                <div className="home-block">
                    <div style={{gridArea: '2 / 1 / 6 / 3'}} className="home-block_info">
                        <div className="heading">
                            Secure storage for your photos
                        </div>
                        <div className="description">
                            Enable auto-upload on your phone and Yandex Disk will store all your photos in their original resolution.
                        </div>
                        <button className="home-button" onClick={() => navigate('/register')}>Get started</button>
                    </div>
                    <div style={{gridArea: '1 / 3 / 8 / 6'}} className="home-block_image"/>
                </div>
            </div>

            <div className="home-block-container">
                <div className="home-block">
                    <div style={{gridArea: '1 / 1 / 8 / 4'}} className="home-block_image"/>
                    <div style={{gridArea: '2 / 4 / 6 / 6', alignItems: 'flex-end'}} className="home-block_info">
                        <div className="heading" style={{width: '80%'}}>
                            Secure storage for your photos
                        </div>
                        <div className="description">
                            Enable auto-upload on your phone and Yandex Disk will store all your photos in their original resolution.
                        </div>
                        <button className="home-button" onClick={() => navigate('/register')}>Get started</button>
                    </div>
                </div>
            </div>

            <div className="home-block-container" style={{backgroundColor: '#f1f5f8'}}>
                <div className="home-block">
                    <div style={{gridArea: '2 / 1 / 6 / 3'}} className="home-block_info">
                        <div className="heading">
                            Secure storage for your photos
                        </div>
                        <div className="description">
                            Enable auto-upload on your phone and Yandex Disk will store all your photos in their original resolution.
                        </div>
                        <button className="home-button" onClick={() => navigate('/register')}>Get started</button>
                    </div>
                    <div style={{gridArea: '1 / 3 / 8 / 6'}} className="home-block_image"/>
                </div>
            </div>

            <div className="home-block-container">
                <div className="home-block">
                    <div style={{gridArea: '1 / 1 / 8 / 4'}} className="home-block_image"/>
                    <div style={{gridArea: '2 / 4 / 6 / 6', alignItems: 'flex-end'}} className="home-block_info">
                        <div className="heading" style={{width: '80%'}}>
                            Secure storage for your photos
                        </div>
                        <div className="description">
                            Enable auto-upload on your phone and Yandex Disk will store all your photos in their original resolution.
                        </div>
                        <button className="home-button" onClick={() => navigate('/register')}>Get started</button>
                    </div>
                </div>
            </div>
        </div>
      );
}

const Home = (props) => {

    // if props.isAuthenticated => place profile icon in header and remove buttons login reg on page

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
