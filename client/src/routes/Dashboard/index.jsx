import React, { useEffect} from "react"
import './style.scss'
import { Link } from "react-router-dom";

const Dashboard = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
      <div className="dashboard">
          <h2>dashboard</h2>
          <Link to='/'>home</Link>
          <Link to='/profile/account'>profile</Link>
      </div>
    );
}


export default Dashboard

