import React, { useEffect } from "react"
import './style.scss'
import { useMediaQuery } from "react-responsive"
import { useParams } from "react-router-dom"

import { DashboardMainStyled } from "./styled"

import DashboardMyDisk from "../../components/DashboardComponents/DashboardMyDisk";
import DashboardHeader from "../../components/DashboardComponents/DbDesktopComponents/DashboardHeader";
import DashboardPanel from "../../components/DashboardComponents/DbDesktopComponents/DashboardPanel";
import DashboardMobileNav from "../../components/DashboardComponents/DbMobileComponents/DashboardMobileNav";
import DashboardMobileController from "../../components/DashboardComponents/DbMobileComponents/DashboardMobileController";
import TopMenuBar from "../../components/DashboardComponents/MyDiskComponents/TopMenuBar";

const Dashboard = () => {
    const board = useParams().page

    const Mobile = useMediaQuery({
        query: '(max-width: 769px)'
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // const chooseBoard = (board) =>{
    //     switch(board){
    //         case 'recent':
    //             return <DashboardMyDisk page={'recent'}/>
    //         case 'files':
    //             return <DashboardMyDisk/>
    //         case 'shared':
    //             return <DashboardMyDisk/>
    //         default: 
    //             return <DashboardMyDisk/>
    //     }
    // }

    return (
        <div className="dashboard">
            {!Mobile ?
                <>
                    <DashboardPanel/>
                    <DashboardMainStyled className="dashboard-main">
                        <DashboardHeader page={board}/>
                        <DashboardMyDisk page={board}/>
                    </DashboardMainStyled>
                </>
            :   
                <>
                    <DashboardMobileController board={board}/>
                    <div className="dashboard-mobile-main">
                        <div className="tmb-mobile-box">
                            <TopMenuBar/>
                        </div>
                        <DashboardMyDisk page={board}/>
                    </div>
                    <DashboardMobileNav/>
                </>
            }           
        </div>
    );
}


export default Dashboard

