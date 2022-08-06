import React from "react"
import './style.scss'


const MDDCreateWindow = (props) => {

    return (
        <>
        <div className="mddcu_bgq" style={props.createOpened ? {display: 'flex'} : {display: 'none'}} onClick={() => props.setCreateOpened(false)}/>
        <div className="mddcu_container" style={props.createOpened ? {display: 'flex'} : {display: 'none'}}>

        </div>
        </>
    );
}


export default MDDCreateWindow

