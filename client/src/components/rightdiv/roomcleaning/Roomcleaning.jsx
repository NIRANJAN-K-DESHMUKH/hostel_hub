import React from 'react'
import './roomcleaning.css'
function Roomcleaning() {
    return (
        <div className='roomcleaningwrapper'>
            <h1 className='title'>Roomcleaning</h1>
            <form className='roomcleaningForm'>
                <input type='text' id='roomNumber' placeholder='Enter your room number (AutoRetrived)' className='roomcleaningInput'></input>
                <input type='text' id='name' placeholder='Enter your name (AutoRetrived)' className='roomcleaningInput'></input>
                <input type='text' id='phoneNumber' placeholder='Enter your phone number (AutoRetrived)' className='roomcleaningInput'></input>
                <input type='text' id='comments' placeholder='Additional comments' className='roomcleaningInput'></input>
                <button className='roomcleaningButton'>Submit Request</button>
            </form>
        </div>
    )
}

export default Roomcleaning