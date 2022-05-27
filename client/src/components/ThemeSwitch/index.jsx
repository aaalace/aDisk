import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import './style.scss';

const ThemeSwitch = (props) => {
  return (
    <>
      <input
        checked={props.checked}
        onChange={props.onChange}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`} style={props.checked ? {} : { background: 'grey' }}>
        <FontAwesomeIcon className={'react-switch-button'} icon={faMoon} />
      </label>
    </>
  );
};

export default ThemeSwitch;