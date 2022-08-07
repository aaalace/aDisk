import React from "react"
import './style.scss'


const MDDUploadWindow = (props) => {

    return (
        <>
        <div className="mddcu_bgq" style={props.uploadOpened ? {display: 'flex'} : {display: 'none'}} onClick={() => props.setUploadOpened(false)}/>
        <div className="mddcu_container" style={props.uploadOpened ? {display: 'flex'} : {display: 'none'}}>
            <input type='file'></input>
        </div>
        </>
    );
}


export default MDDUploadWindow

