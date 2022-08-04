import React, { useState } from "react"
import './style.scss'
import MDMCreateUpload from "../MyDiskComponents/MDMobileComponents/MDMCreateUpload"

const DashboardMyDisk = () => {

    const [createUploadOpened, setCreateUploadOpened] = useState(false)

    return (
        <div className="dashboard-content">
            <MDMCreateUpload/>
        </div>
    );
}


export default DashboardMyDisk

