import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({children, isAuthenticated}) => {
    if(isAuthenticated){
        return children
    }
    return <Navigate to='/login' replace/>
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, null)(PrivateRoute)