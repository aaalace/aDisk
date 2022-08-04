import React, { useEffect } from "react"
import './style.scss'
import { useMediaQuery } from "react-responsive"
import { useParams } from "react-router-dom"

import DashboardMyDisk from "../../components/DashboardComponents/DashboardMyDisk";
import DashboardHeader from "../../components/DashboardComponents/DbDesktopComponents/DashboardHeader";
import DashboardPanel from "../../components/DashboardComponents/DbDesktopComponents/DashboardPanel";
import DashboardMobileNav from "../../components/DashboardComponents/DbMobileComponents/DashboardMobileNav";
import DashboardMobileController from "../../components/DashboardComponents/DbMobileComponents/DashboardMobileController";
import TopMenuBar from "../../components/DashboardComponents/MyDiskComponents/TopMenuBar";
import MDMSearch from "../../components/DashboardComponents/MyDiskComponents/MDMobileComponents/MDMSearch";

const Dashboard = () => {
    const board = useParams().page

    const Mobile = useMediaQuery({
        query: '(max-width: 769px)'
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const chooseBoard = (board) =>{
        switch(board){
            case 'my-disk':
                return <DashboardMyDisk/>
            case 'my-disk_1':
                return <DashboardMyDisk/>
            case 'my-disk_2':
                return <DashboardMyDisk/>
            case 'my-disk_3':
                return <DashboardMyDisk/>
            default: 
                return <DashboardMyDisk/>
        }
    }

    return (
        <div className="dashboard">
            {!Mobile ?
                <>
                    <DashboardPanel/>
                    <div className="dashboard-main">
                        <DashboardHeader page={board}/>
                        {chooseBoard(board)}
                    </div>
                </>
            :   
                <>
                    <DashboardMobileController board={board}/>
                    <div className="dashboard-mobile-main">
                        <div className="tmb-mobile-box">
                            <TopMenuBar/>
                        </div>
                        {chooseBoard(board)}
                    </div>
                    <DashboardMobileNav/>
                </>
            }           
        </div>
    );
}


export default Dashboard

