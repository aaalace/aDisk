import React, { useState } from "react"
import './style.scss'
import { Link } from "react-router-dom"
import { RecoverPasswordStyled } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import ReactLoading from 'react-loading';

import { sendResetAction } from "../../../actions/reset_password"

const RecoverPassword = (props) => {

    const [loadingState, setLoadingState] = useState(false)
    const [errorState, setErrorState] = useState(null)
    const [sendedState, setSendedState] = useState(false)
    const [email, setEmail] = useState('')

    const sendReset = async () => {
        setLoadingState(true)
        setErrorState(false)
        const toSend = {email: email, locale: props.currentLocale}
        
        const res = await props.sendResetAction(toSend)

        if(res[0]){
            setSendedState(true)
        }
        else{
            console.log(res[1])
            setErrorState(true)
        }
        setLoadingState(false)
    }

    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendReset()
        }
    }

    return (
        <RecoverPasswordStyled className="recover-password-container">
            <Link to='/login/entry' className="back"><FontAwesomeIcon className="icon" icon={faArrowLeftLong}/><FormattedMessage id='pr_back'/></Link>
            <div className="recover-password">
                <div className="recover-password-header">
                    {
                        sendedState ? 
                            <>
                                <h2 className="page-name"><FormattedMessage id='pr_success_name'/></h2>
                                <p className="page-description">
                                    <FormattedMessage id='pr_success_desc'/>
                                </p>
                            </>
                        :   
                            <>
                                <h2 className="page-name"><FormattedMessage id='pr_name'/></h2>
                                <p className="page-description">
                                    <FormattedMessage id='pr_desc'/>
                                </p>
                            </>
                    }
                </div>
                {
                    sendedState ?
                        null
                    :
                        <div className="user-recover" onKeyDown={handleKeyDown}>
                            <div className="username-line">
                                <p><FormattedMessage id='sign_up_email'/></p>
                                <input type='email' onChange={e => setEmail(e.target.value)} value={email}/>
                            </div>
                            <div className="recover-bottom-container">
                                <div className="recover-bottom-head">
                                    {errorState ? <p style={{color: 'red', fontSize: '13px', position: 'relative'}}>{<FormattedMessage id='email_does_not_exists'/>}</p> : ''}
                                </div>
                                <div className="recover-bottom">
                                    <p onClick={() => sendReset()} className="send-code"><FormattedMessage id='pr_btn'/></p>
                                    {loadingState ? <ReactLoading type='spin' color='#5643CC' height={25} width={25}></ReactLoading> : null}
                                </div>
                            </div>
                        </div>
                }
            </div>
        </RecoverPasswordStyled>
    )
}


export default connect(null, {sendResetAction})(RecoverPassword)