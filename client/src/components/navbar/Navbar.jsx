import React from 'react'
import "./navbar.css"
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RateReviewIcon from '@mui/icons-material/RateReview';
import LogoutIcon from '@mui/icons-material/Logout';
import show from '../rightdiv/show.js'
import { Link } from "react-router-dom";
const Navbar = () => {
    const handleClickDashboard = () => {
        show(".dashboardwrapper");
    }
    const handleClickRoomCleaning = () => {
        show(".roomcleaningwrapper");
    }
    const handleClickComplaint = () => {
        show(".complaintwrapper");
    }
    return (
        <div className='leftdivision'>
            <ul>
                <li className='listItem_leftdiv' onClick={handleClickDashboard} >
                    <DashboardIcon className='logoimage' />
                    <span className='listItemName'>Dashboard</span>
                </li>
                <li className='listItem_leftdiv' onClick={handleClickRoomCleaning}>
                    <CleaningServicesIcon className='logoimage' />
                    {/* <img className='logoimage' src='/assets/455705.png' ></img> */}
                    <span className='listItemName'>Room Cleaning</span>
                </li>
                <li className='listItem_leftdiv' onClick={handleClickComplaint}>
                    <RateReviewIcon className='logoimage' />

                    <span className='listItemName'>Complaint</span>
                </li>
                {/* <li className='listItem_leftdiv'>
                    <img className='logoimage' src='/assets/455705.png' ></img>
                    <span className='listItemName'>Hello</span>
                </li> */}
                <Link to="/login" style={{ textDecoration: "none" }}>
                    <li className='listItem_leftdiv'>
                        <LogoutIcon className='logoimage' />
                        <span className='listItemName'>Logout</span>
                    </li>
                </Link>
            </ul>



        </div>
    )
}

export default Navbar;

