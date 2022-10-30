import { connect } from "react-redux";

const PrivateWrapper = ({ children, isAuthenticated }) => {

    return (
        isAuthenticated ? children : null
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, null)(PrivateWrapper)