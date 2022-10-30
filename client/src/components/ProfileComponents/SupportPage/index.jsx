import React from "react"
import './style.scss'
import { SupportContainer, QuestionContainer } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faHeadset, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FormattedMessage } from 'react-intl'

const SupportPage = () => {

    return (
        <SupportContainer className="support-container">
            <div className="support-header">
                <p><FormattedMessage id="supp_question"/></p>
                <a href = "mailto: tyj5resd@gmail.com"><FormattedMessage id="supp_write_us"/><FontAwesomeIcon className="icon" icon={faEnvelope}/></a>
            </div>
            <QuestionContainer id={1} className="question-container">
                <div className="question">
                    <div className="question-header">
                        <p className="name"><FontAwesomeIcon icon={faUserAstronaut}/> - Cannot see file preview</p>
                    </div>
                    <div className="desc"><FontAwesomeIcon icon={faHeadset}/> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</div>
                </div>
            </QuestionContainer>
            <QuestionContainer id={2} className="question-container">
                <div className="question">
                    <div className="question-header">
                        <p className="name"><FontAwesomeIcon icon={faUserAstronaut}/> - Cannot see file preview</p>
                    </div>
                    <div className="desc"><FontAwesomeIcon icon={faHeadset}/> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</div>
                </div>
            </QuestionContainer>
            <QuestionContainer id={3} className="question-container">
                <div className="question">
                    <div className="question-header">
                        <p className="name"><FontAwesomeIcon icon={faUserAstronaut}/> - Cannot see file preview</p>
                    </div>
                    <div className="desc"><FontAwesomeIcon icon={faHeadset}/> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</div>
                </div>
            </QuestionContainer>
            <QuestionContainer id={4} className="question-container">
                <div className="question">
                    <div className="question-header">
                        <p className="name"><FontAwesomeIcon icon={faUserAstronaut}/> - Cannot see file preview</p>
                    </div>
                    <div className="desc"><FontAwesomeIcon icon={faHeadset}/> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia</div>
                </div>
            </QuestionContainer>
        </SupportContainer>
    )
}


export default SupportPage