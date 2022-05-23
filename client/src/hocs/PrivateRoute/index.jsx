import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

const PrivateWrapper = ({ isAuthenticated }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, null)(PrivateWrapper)