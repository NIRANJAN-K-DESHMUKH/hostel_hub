import React from 'react';
import "./topbar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Topbar = () => {
    return (
        <div className='topbarWrapper'>
            <span className='topbarTitle'>HostelHub</span>
            <AccountCircleIcon className='profileLogo' sx={{ fontSize: 50 }} />
        </div>
    )
}

export default Topbar;