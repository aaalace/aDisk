import React from "react"
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import './style.scss'

const Home = (props) => {
    // const navigate = useNavigate()

    // if props.isAuthenticated => place profile icon in header and remove buttons login reg on page

    return (
      <div className="home">
          <Link to='/login'>login </Link>
          <Link to='/register'>register </Link>
          <Link to='/dashboard'>dashboard</Link>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(Home)
