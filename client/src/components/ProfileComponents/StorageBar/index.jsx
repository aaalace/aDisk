import React from "react";
import { FormattedMessage } from 'react-intl'

const StorageBar = (props) => {
    const { completed } = props;

    const containerStyles = {
        height: 25,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        marginTop: 30,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: '#5643CC',
        borderRadius: 'inherit',
        textAlign: 'right',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontSize: 13
    }

    const storageInfo = {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 10,
        right: 0,
        fontWeight: 'bold',
        fontSize: 15
    }

    const storageAllInfo = {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 500,
        fontSize: 10,
        color: 'grey'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}></span>
            </div>
            <div style={storageInfo}>30.0<FormattedMessage id="prof_GB"/><p style={storageAllInfo}>&nbsp;/ 100.0<FormattedMessage id="prof_GB"/></p></div>
        </div>
    );
};

export default StorageBar;