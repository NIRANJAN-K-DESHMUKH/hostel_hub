import React from 'react'
import "./navbar.css"
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RateReviewIcon from '@mui/icons-material/RateReview';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
    return (
        <div className='leftdivision'>
            <ul>
                <li className='listItem' >
                    <DashboardIcon className='logoimage' />
                    <span className='listItemName'>Dashboard</span>
                </li>
                <li className='listItem'>
                    <CleaningServicesIcon className='logoimage' />
                    {/* <img className='logoimage' src='/assets/455705.png' ></img> */}
                    <span className='listItemName'>Room Cleaning</span>
                </li>
                <li className='listItem'>
                    <RateReviewIcon className='logoimage' />

                    <span className='listItemName'>Complaint</span>
                </li>
                {/* <li className='listItem'>
                    <img className='logoimage' src='/assets/455705.png' ></img>
                    <span className='listItemName'>Hello</span>
                </li> */}
                <li className='listItem'>
                    <LogoutIcon className='logoimage' />
                    <span className='listItemName'>Logout</span>
                </li>

            </ul>



        </div>
    )
}

export default Navbar;

