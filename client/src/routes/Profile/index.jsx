import React from "react"
import './style.scss'
import { connect } from 'react-redux'
import { logout } from "../../actions/auth"
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
    const navigate = useNavigate();

    const logOut = () => {
        props.logout()
        navigate('/login')
    }

    return (
      <div className="profile">
          <h2>PROFILE</h2>
          <p onClick={logOut}>logout</p>
      </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, {logout})(Profile)