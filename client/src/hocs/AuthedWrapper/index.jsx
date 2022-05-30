import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const AuthedWrapper = ({ children, isAuthenticated }) => {

    return (
        isAuthenticated ? <Navigate to="/profile/account" replace/> : children
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, null)(AuthedWrapper)