import React from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA, faChartPie, faCalendarAlt, faArrowUpWideShort, faArrowDownWideShort, faCheck } from '@fortawesome/free-solid-svg-icons'

const MDMSorting = (props) => {

    return (
        <>
        <div className="msmsorting_bg" style={props.msmsOpened ? {display: 'flex'} : {display: 'none'}} onClick={() => props.setmsmsOpened(false)}/>
        <div className="msmsorting_container" style={props.msmsOpened ? {display: 'flex'} : {display: 'none'}}>
            <div className="msmsorting_line">
                <p className="msmsorting_heading">Сортировать по</p>
                <div className="msmsorting_custom_ul">
                    <div className="msmsorting_item">
                        <div className="msmsorting_item_data">
                            <FontAwesomeIcon className="icon" icon={faA}/>
                            <p className="msmsorting_name">Названию</p>
                        </div>
                        <FontAwesomeIcon className={true ? 'check' : 'notcheck'} icon={faCheck}/>
                    </div>
                    <div className="msmsorting_item">
                        <div className="msmsorting_item_data">
                            <FontAwesomeIcon className="icon" icon={faCalendarAlt}/>
                            <p className="msmsorting_name">Дате изменения</p>
                        </div>
                        <FontAwesomeIcon className={false ? 'check' : 'notcheck'} icon={faCheck}/>
                    </div>
                    <div className="msmsorting_item">
                        <div className="msmsorting_item_data">
                            <FontAwesomeIcon className="icon" icon={faChartPie}/>
                            <p className="msmsorting_name">Размеру</p>
                        </div>
                        <FontAwesomeIcon className={false ? 'check' : 'notcheck'} icon={faCheck}/>
                    </div>
                </div>
            </div>
            <span className="custom_hr_sorting"></span>
            <div className="msmsorting_line">
                <div className="msmsorting_custom_ul">
                    <div className="msmsorting_item">
                        <div className="msmsorting_item_data">
                            <FontAwesomeIcon className="icon" icon={faArrowUpWideShort}/>
                            <p className="msmsorting_name">Возрастанию</p>
                        </div>
                        <FontAwesomeIcon className={true ? 'check' : 'notcheck'} icon={faCheck}/>
                    </div>
                    <div className="msmsorting_item">
                        <div className="msmsorting_item_data">
                            <FontAwesomeIcon className="icon" icon={faArrowDownWideShort}/>
                            <p className="msmsorting_name">Убыванию</p>
                        </div>
                        <FontAwesomeIcon className={false ? 'check' : 'notcheck'} icon={faCheck}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default MDMSorting

