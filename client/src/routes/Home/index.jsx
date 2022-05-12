import React from "react"
import { Link } from 'react-router-dom';
import './style.scss'

const Home = (props) => {

    return (
      <div className="home">
          <Link to='/login'>login </Link>
          <Link to='/register'>register </Link>
          <Link to='/dashboard'>dashboard </Link>
          <Link to='/profile'>profile</Link>
      </div>
    );
}

export default Home