import React, { Fragment, useState, useEffect } from "react"
import './style.scss'
import { connect } from "react-redux";
import { checkAuth } from "../../actions/auth";
import { loadUser } from "../../actions/profile";

const AuthedCheckerContainer = (props) => {

    const [cookieClaimed, setCookieClaimed] = useState(false)

    const claimCookie = () => {
        localStorage.setItem('cookie-claim', true)
        setCookieClaimed(true)
    }

    useEffect(() => {
        let cookieClaimedLS = localStorage.getItem('cookie-claim')
        if(cookieClaimedLS){
            setCookieClaimed(true)
        }
        props.checkAuth()
    }, [])

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
                        <button className="accept-button" type="button" onClick={claimCookie}>Accept cookies</button>
                    </div>
                </div> 
            : 
                null
            }
      </Fragment>
    );
}

export default connect(null, {checkAuth, loadUser})(AuthedCheckerContainer)