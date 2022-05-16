import React from "react"
import './style.scss'
import { Link } from 'react-router-dom';

const AdvantagesCarousel = (props) => {

    return (
      <div className="adv-carousel">
            <div className="adv-carousel-name-container">
                <p className="icon">aDisk</p>
            </div>
            <div className="adv-carousel-description-container">
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="adv-carousel-bar-container">
                <Link className="bar" to='/'><i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;Home</Link>
                <Link className="bar" to='/login'><i class='fas fa-user-alt'></i>&nbsp;&nbsp;Login</Link>
                <Link className="bar" to='/register'><i class='fas fa-user-plus'></i>&nbsp;&nbsp;Register</Link>
            </div>
      </div>
    );
}

export default AdvantagesCarousel