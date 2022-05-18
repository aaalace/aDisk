import React from "react"
import './style.scss'
import { Link } from "react-router-dom";

const Dashboard = () => {

    return (
      <div className="dashboard">
          <h2>dashboard</h2>
          <Link to='/profile'>profile</Link>
      </div>
    );
}


export default Dashboard