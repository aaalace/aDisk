import { useLocation, Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PrivateWrapper = ({ children, isAuthenticated }) => {
    const location = useLocation()

    return (
        isAuthenticated ? children : <Navigate to="/login" replace state={{from: location}} />
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, null)(PrivateWrapper)