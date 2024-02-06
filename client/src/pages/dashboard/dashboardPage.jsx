import React, { useState } from 'react';
import Topbar from '../../components/topbar/Topbar.jsx';
import "./dashboard.css";
import Navbar from '../../components/navbar/Navbar.jsx';
const DashboardPage = () => {

    return (
        <div className='mainPage'>
            <Topbar />
            {/* <h1 className='title'>Dashboard</h1> */}
            <div className='dashboardWrapper'>
                <Navbar />
                {/* <div className='leftdivision'>
                    <ul>
                        <li>
                            <img className='logoimage' src='/assets/455705.png' ></img>
                        </li>
                        <li>
                            <img className='logoimage' src='/assets/455705.png' ></img>
                        </li>
                        <li>
                            <img className='logoimage' src='/assets/455705.png' ></img>
                        </li>
                        <li>
                            <img className='logoimage' src='/assets/455705.png' ></img>
                        </li>
                        <li>
                            <img className='logoimage' src='/assets/455705.png' ></img>
                        </li>

                    </ul>

                </div> */}
                <div className='rightdivision'>
                    Right Division
                </div>
            </div>
        </div>


    );
};
export default DashboardPage;