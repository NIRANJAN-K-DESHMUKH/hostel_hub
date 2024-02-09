import React from 'react'
import "./navbar.css"
const Navbar = () => {
    return (
        <div className='leftdivision'>
            <ul>
                <li className='listItem' >
                    <img className='logoimage' src='/assets/455705.png' ></img>
                    <span className='listItemName'>Dashboard</span>
                </li>
                <li className='listItem'>
                    <img className='logoimage' src='/assets/455705.png' ></img>
                    <span className='listItemName'>Roomcleaning</span>
                </li>
                <li className='listItem'>
                    <img className='logoimage' src='/assets/455705.png' ></img>
                    <span className='listItemName'>Complaint</span>
                </li>
                <li className='listItem'>
                    <img className='logoimage' src='/assets/455705.png' ></img>
                    <span className='listItemName'>Hello</span>
                </li>
                <li className='listItem'>
                    <img className='logoimage' src='/assets/455705.png' ></img>
                    <span className='listItemName'>Logout</span>
                </li>

            </ul>



        </div>
    )
}

export default Navbar;

