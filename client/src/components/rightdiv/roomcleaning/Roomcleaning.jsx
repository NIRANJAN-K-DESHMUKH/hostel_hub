import React from 'react'
import './roomcleaning.css'
function Roomcleaning() {
    return (
        <div className='roomcleaningwrapper'>
            <h1 className='title'>Room Cleaning</h1>
            <form className='roomcleaningForm'>
                <p className='studentdetails'>Name: Nimesh Bhavsar</p>
                <p className='studentdetails'>Room Number: 101</p>
                <p className='studentdetails'>Phone Number: 1234567890</p>
                <p className='studentdetails'>Room Cleaning Request</p>
                {/* <input type='text' id='roomNumber' placeholder='Enter your room number (AutoRetrived)' className='roomcleaningInput'></input>
                <input type='text' id='name' placeholder='Enter your name (AutoRetrived)' className='roomcleaningInput'></input>
                <input type='text' id='phoneNumber' placeholder='Enter your phone number (AutoRetrived)' className='roomcleaningInput'></input> */}

                <textarea id='comments' placeholder='Comments' className='roomcleaningInput'></textarea>
                <button className='roomcleaningButton' >Submit Request</button>
            </form>
        </div>
    )
}

export default Roomcleaning