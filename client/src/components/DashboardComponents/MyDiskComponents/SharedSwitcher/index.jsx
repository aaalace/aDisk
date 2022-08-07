import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import './style.scss';

const SharedSwitcher = (props) => {

    return (
        <>
        <input
            checked={props.sharedOn}
            onChange={() => props.setSharedOn(!props.sharedOn)}
            className="react-switch-checkbox-shared"
            id={`react-switch-shared`}
            type="checkbox"
        />
        <label className="react-switch-label-shared" htmlFor={`react-switch-shared`} style={props.sharedOn ? {} : { background: 'grey' }}>
            <FontAwesomeIcon className={'react-switch-button-shared'} icon={faUsers} />
        </label>
        </>
    );
};

export default SharedSwitcher;