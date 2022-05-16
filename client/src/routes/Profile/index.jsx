import React, { useState } from "react"
import './style.scss'
import { connect } from 'react-redux'
import { logout } from "../../actions/auth"
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "../../actions/profile"
import { deleteAccount } from "../../actions/auth";
import { Link } from "react-router-dom";

const Profile = (props) => {
    const navigate = useNavigate();

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    
    const logOut = async e => {
        e.preventDefault()

        const res = await props.logout()
        if(res){
            navigate('/login')
        }
    }

    const updateProfile = e => {
        e.preventDefault()
        props.updateProfile(first_name, last_name)
        setFirstName('')
        setLastName('')
    }

    const deleteAccount = e => {
        e.preventDefault()
        if (window.confirm('Are you sure you want to delete an account?')){
            props.deleteAccount()
            navigate('/login')
        }
    }

    return (
      <div className="profile">
            <Link to='/dashboard' style={{display: 'block', marginBottom: '20px', textDecoration: 'underline'}}>dashboard</Link>
            <div style={{marginBottom: '20px'}}>
                <h3>Profile</h3>
                <p>username: {props.username_global}</p>
                <p>email: {props.email_global}</p>
                <p>first name: {props.first_name_global}</p>
                <p>last name: {props.last_name_global}</p>
            </div>
            <div style={{marginBottom: '20px'}}>
                <h3>Update profile</h3>
                <form onSubmit={e => updateProfile(e)}>
                    <p>first name</p>
                    <input type='text' value={first_name} onChange={e => setFirstName(e.target.value)}></input>
                    <p>last name</p>
                    <input type='text' value={last_name} onChange={e => setLastName(e.target.value)}></input>
                    <button type="submit">Update</button>
                </form>
            </div>
            <p style={{color: 'orange', cursor: 'pointer', marginBottom: '10px'}} onClick={logOut}>logout</p>
            <p style={{color: 'red', cursor: 'pointer'}} onClick={deleteAccount}>delete account</p>
      </div>
    );
}

const mapStateToProps = state => {
    return {
        username_global: state.profile.username,
        email_global: state.profile.email,
        first_name_global: state.profile.first_name,
        last_name_global: state.profile.last_name
    }
}

export default connect(mapStateToProps, {updateProfile, logout, deleteAccount})(Profile)