import React, { Fragment, useState, useEffect } from "react"
import './style.scss'
import { connect } from "react-redux";
import { checkAuth } from "../../actions/auth";
import { loadUser } from "../../actions/profile";

const CheckerContainer = (props) => {

    const [cookieClaimed, setCookieClaimed] = useState(false)

    useEffect(() => {
        async function authProcess () {
            const res = await props.checkAuth()
            if(!res){
                setCookieClaimed(false)
            }
            else{
                setCookieClaimed(true)
                props.loadUser()
            }
        }
        authProcess()
    }, [props])

    return (
      <Fragment>
            {props.children}
            {!cookieClaimed ? 
                <div className="cookie-modal">
                    <div className="warning">
                        Cookies
                    </div>
                    <div className="info">
                        We use cookies to improve your experience on our site
                    </div>
                    <div className="accept">
                        <button className="accept-button" type="button" onClick={() => setCookieClaimed(true)}>Accept cookies</button>
                    </div>
                </div> 
            : 
                null
            }
      </Fragment>
    );
}

export default connect(null, {checkAuth, loadUser})(CheckerContainer)