import React from "react"
import { connect } from "react-redux";
import './style.scss'

const privSave = ({isAuthenticated}) => {

    return (
        isAuthenticated ? children : null
    )
}

export default connect(mapStateToProps, null)(privSave)