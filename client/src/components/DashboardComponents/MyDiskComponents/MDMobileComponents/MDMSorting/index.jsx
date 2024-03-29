import React, { useState } from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA, faChartSimple, faCalendarAlt, faArrowUpWideShort, faArrowDownWideShort, faCheck } from '@fortawesome/free-solid-svg-icons'

const MDMSorting = (props) => {

    const [sTopId, setSTopId] = useState(1)
    const [sBtmId, setSBtmId] = useState(1)

    // !!! ТОЛЬКО ПРИ ВЫХОДЕ ИЗ СОРТИНГА ДЕЛАТЬ ЗАПРОС

    return (
        <>
        <div className="msmsorting_bg" style={props.msmsOpened ? {display: 'flex'} : {display: 'none'}} onClick={() => props.setmsmsOpened(false)}/>
        <div className="msmsorting_container" style={props.msmsOpened ? {display: 'flex'} : {display: 'none'}}>
            <div className="msmsorting_line">
                <p className="msmsorting_heading">Сортировать по</p>
                <div className="msmsorting_custom_ul">
                    <div className="msmsorting_item" onClick={() => setSTopId(1)}>
                        <div className="msmsorting_item_data">
                            <FontAwesomeIcon className="icon" icon={faA}/>
                            <p className="msmsorting_name">Названию</p>
                        </div>
                        <FontAwesomeIcon className={sTopId === 1 ? 'check' : 'notcheck'} icon={faCheck}/>
                    </div>
                    <div className="msmsorting_item" onClick={() => setSTopId(2)}>
                        <div className="msmsorting_item_data">
                            <FontAwesomeIcon className="icon" icon={faCalendarAlt}/>
                            <p className="msmsorting_name">Дате изменения</p>
                        </div>
                        <FontAwesomeIcon className={sTopId === 2 ? 'check' : 'notcheck'} icon={faCheck}/>
                    </div>
                    <div className="msmsorting_item" onClick={() => setSTopId(3)}>
                        <div className="msmsorting_item_data">
                            <FontAwesomeIcon className="icon" icon={faChartSimple}/>
                            <p className="msmsorting_name">Размеру</p>
                        </div>
                        <FontAwesomeIcon className={sTopId === 3 ? 'check' : 'notcheck'} icon={faCheck}/>
                    </div>
                </div>
            </div>
            <span className="custom_hr_sorting"></span>
            <div className="msmsorting_line">
                <div className="msmsorting_custom_ul">
                    <div className="msmsorting_item" onClick={() => setSBtmId(1)}>
                        <div className="msmsorting_item_data">
                            <FontAwesomeIcon className="icon" icon={faArrowUpWideShort}/>
                            <p className="msmsorting_name">Возрастанию</p>
                        </div>
                        <FontAwesomeIcon className={sBtmId === 1 ? 'check' : 'notcheck'} icon={faCheck}/>
                    </div>
                    <div className="msmsorting_item" onClick={() => setSBtmId(2)}>
                        <div className="msmsorting_item_data">
                            <FontAwesomeIcon className="icon" icon={faArrowDownWideShort}/>
                            <p className="msmsorting_name">Убыванию</p>
                        </div>
                        <FontAwesomeIcon className={sBtmId === 2 ? 'check' : 'notcheck'} icon={faCheck}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default MDMSorting

