import React, {Fragment} from "react"
import { useEffect } from "react";
import { connect } from "react-redux";
import { checkAuth } from "../../actions/auth";
import { loadUser } from "../../actions/profile";

const CheckerContainer = (props) => {

    useEffect(() => {
        async function authProcess () {
            await props.checkAuth()
            await props.loadUser()
        }
        authProcess()
    }, [props])

    return (
      <Fragment>
          {props.children}
      </Fragment>
    );
}

export default connect(null, {checkAuth, loadUser})(CheckerContainer)