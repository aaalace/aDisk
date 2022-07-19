import React, { useEffect } from "react"
import './style.scss'
import { useParams } from "react-router-dom"

import DashboardHeader from "../../components/DashboardComponents/DashboardHeader";
import DashboardPanel from "../../components/DashboardComponents/DashboardPanel";
import DashboardMyDisk from "../../components/DashboardComponents/DashboardMyDisk";

const Dashboard = () => {
    const board = useParams().page

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
            <DashboardPanel/>
            <div className="dashboard-models">
                <DashboardHeader page={board}/>
                {chooseBoard(board)}
            </div>
        </div>
    );
}


export default Dashboard

