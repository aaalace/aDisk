import React, { useState } from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faMagnifyingGlass, faEllipsis, faClose, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

import MDMSearch from "../../MyDiskComponents/MDMobileComponents/MDMSearch"
import MDMSorting from "../../MyDiskComponents/MDMobileComponents/MDMSorting"

const DashboardMobileController = (props) => {

    const [msmsearchOpened, setmsmsearchOpened] = useState(false)
    const [msmsortingOpened, setmsmsortingOpened] = useState(false)

    return (
        <div className="mobile-controller-db">
            <div className="mc-top">
                <Link className="link" to='/profile/account'><FontAwesomeIcon className="icon" icon={faUserAstronaut}/></Link>
                <h1>{props.board}</h1>
                <div className="actions-container">
                    <button className="action-button" onClick={() => setmsmsearchOpened(!msmsearchOpened)}><FontAwesomeIcon className="icon" icon={msmsearchOpened ? faClose : faMagnifyingGlass}/></button>
                    <button className="action-button" onClick={() => setmsmsortingOpened(true)}><FontAwesomeIcon className="icon" icon={faBarsStaggered}/></button>
                </div>
            </div>
            <MDMSearch msmsOpened={msmsearchOpened} setmsmsOpened={setmsmsearchOpened} />
            <MDMSorting msmsOpened={msmsortingOpened} setmsmsOpened={setmsmsortingOpened} />
        </div>
    )
}


export default DashboardMobileController