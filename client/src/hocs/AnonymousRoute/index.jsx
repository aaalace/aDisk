import React from "react"
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

export const AnonymousRoute = ({ children, isAuthenticated }) => {

    if (isAuthenticated) {
        return <Navigate to="/dashboard"/>;
    }
  
    return children;
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(AnonymousRoute)