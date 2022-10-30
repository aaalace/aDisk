import React, { useState } from "react"
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA, faChartSimple, faCalendarAlt, faArrowUpWideShort, faArrowDownWideShort, faXmark } from '@fortawesome/free-solid-svg-icons'

const MDDSorting = (props) => {

    const [topOpened, setTopOpened] = useState(false)
    const [bottomOpened, setBottomOpened] = useState(false)
    const [sTopId, setSTopId] = useState(1)
    const [sBtmId, setSBtmId] = useState(1)

    const switchTopNameById = () => {
        switch (sTopId) {
            case 1:
                return <p className="sbw_name">По названию</p>
            case 2:
                return <p className="sbw_name">По дате изменения</p>
            case 3:
                return <p className="sbw_name">По размеру</p>        
            default:
                return <p className="sbw_name">По названию</p>
        }
    }

    const switchBottomNameById = () => {
        switch (sBtmId) {
            case 1:
                return <FontAwesomeIcon className="icon" icon={faArrowUpWideShort}/>
            case 2:
                return <FontAwesomeIcon className="icon" icon={faArrowDownWideShort}/>
            default:
                return <FontAwesomeIcon className="icon" icon={faArrowUpWideShort}/>
        }
    }

    const openTop = () => {
        setTopOpened(!topOpened)
        setBottomOpened(false)
    }

    const openBottom = () => {
        setBottomOpened(!bottomOpened)
        setTopOpened(false)
    }

    const toSetTopId = (id) => {
        setSTopId(id)
        setTopOpened(false)
    }

    const toSetBtmId = (id) => {
        setSBtmId(id)
        setBottomOpened(false)
    }

    return (
        <>
        <div className="sort-button-wid-container">
            <div className="sort-button-wid" onClick={openTop}>{switchTopNameById()}</div>
            <div className="sort-button-wid" onClick={openBottom}>{switchBottomNameById()}</div>
        </div>
        <div className="top_sorting_container" style={topOpened ? {display: 'flex'} : {display: 'none'}}>
            <button type="button" className="tbsc-close" onClick={() => setTopOpened(false)}><FontAwesomeIcon className="icon" icon={faXmark}/></button>
            <div className="msmsorting_line">
                <div className="msmsorting_custom_ul">
                    <div className="msmsorting_item" onClick={() => toSetTopId(1)}>
                        <div className="msmsorting_item_data">
                            <div className="icon-cont">
                              <FontAwesomeIcon className={sTopId === 1 ? 'icon check' : 'icon'} icon={faA}/>
                            </div>
                            <p className="msmsorting_name">Названию</p>
                        </div>
                    </div>
                    <div className="msmsorting_item" onClick={() => toSetTopId(2)}>
                        <div className="msmsorting_item_data">
                            <div className="icon-cont">
                                <FontAwesomeIcon className={sTopId === 2 ? 'icon check' : 'icon'} icon={faCalendarAlt}/>
                            </div>
                            <p className="msmsorting_name">Дате изменения</p>
                        </div>
                    </div>
                    <div className="msmsorting_item" onClick={() => toSetTopId(3)}>
                        <div className="msmsorting_item_data">
                            <div className="icon-cont">
                                <FontAwesomeIcon className={sTopId === 3 ? 'icon check' : 'icon'} icon={faChartSimple}/>
                            </div>
                            <p className="msmsorting_name">Размеру</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom_sorting_container" style={bottomOpened ? {display: 'flex'} : {display: 'none'}}>
        <button type="button" className="tbsc-close" onClick={() => setBottomOpened(false)}><FontAwesomeIcon className="icon" icon={faXmark}/></button>
            <div className="msmsorting_line">
                <div className="msmsorting_custom_ul">
                    <div className="msmsorting_item" onClick={() => toSetBtmId(1)}>
                        <div className="msmsorting_item_data">
                            <div className="icon-cont">
                                <FontAwesomeIcon className={sBtmId === 1 ? 'icon check' : 'icon'} icon={faArrowUpWideShort}/>
                            </div>
                            <p className="msmsorting_name">Возрастанию</p>
                        </div>
                    </div>
                    <div className="msmsorting_item" onClick={() => toSetBtmId(2)}>
                        <div className="msmsorting_item_data">
                            <div className="icon-cont">
                               <FontAwesomeIcon className={sBtmId === 2 ? 'icon check' : 'icon'} icon={faArrowDownWideShort}/>
                            </div>
                            <p className="msmsorting_name">Убыванию</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default MDDSorting

