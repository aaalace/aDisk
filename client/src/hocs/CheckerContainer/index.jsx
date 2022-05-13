import React, {Fragment} from "react"
import { useEffect } from "react";
import { connect } from "react-redux";
import { checkAuth } from "../../actions/auth";


const CheckerContainer = (props) => {

    useEffect(() => {
        props.checkAuth()
    }, [])

    return (
      <Fragment>
          {props.children}
      </Fragment>
    );
}

export default connect(null, {checkAuth})(CheckerContainer)