import React from "react"
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import './style.scss'
import { HomeHeader } from "../../components/HomeHeader";

const HomeBlocksContainer = (props) => {
    const navigate = useNavigate()

    return (
        <div className="home-blocks-container">

            <div className="home-block-container">
                <div className="home-block">
                    <div className="home-block_info">
                        <h2 className="heading">
                            Secure storage for your photos
                        </h2>
                        <h4 className="description">
                            Enable auto-upload on your phone and Yandex Disk will store all your photos in their original resolution.
                        </h4>
                        <button className="home-button" onClick={() => navigate('/register')}>Get started</button>
                    </div>
                    <div className="home-block_image">

                    </div>
                </div>
            </div>

            <div className="home-block-container" style={{backgroundColor: '#f1f5f8'}}>
                <div className="home-block">
                    <div className="home-block_info">
                        <h2 className="heading">
                            Secure storage for your photos
                        </h2>
                        <h4 className="description">
                            Enable auto-upload on your phone and Yandex Disk will store all your photos in their original resolution.
                        </h4>
                        <button className="home-button" onClick={() => navigate('/register')}>Get started</button>
                    </div>
                    <div className="home-block_image">

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
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(Home)
