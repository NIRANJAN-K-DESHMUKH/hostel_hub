import React from 'react'
import './rightdivision.css'
import Dashboard from './dashboard/Dashboard.jsx'
import Roomcleaning from './roomcleaning/Roomcleaning.jsx'
import Complaint from './complaint/Complaint.jsx'
import show from './show.js'

const RightDivision = () => {
    const handleClickDashboard = () => {
        show(".dashboardwrapper");
        console.log("dashboardwrapper");
    }
    return (
        <div className='rightdivision'>
            <Dashboard />
            <Roomcleaning />
            <Complaint />
        </div>
    )
}

export default RightDivision;