import React, { useState } from 'react';
import Topbar from '../../components/topbar/Topbar.jsx';
import "./adminDashboard.css";
import Navbar from '../../components/navbar/Navbar.jsx';
import RightDivision from '../../components/rightdiv/RightDivision.jsx';

const AdminDashboard = () => {

    return (
        <div className='main'>
            <Topbar />
            <div className='dashboardWrapper'>
                <Navbar />
                <RightDivision />
            </div>
            admin dash
        </div>


    );
};
export default AdminDashboard;