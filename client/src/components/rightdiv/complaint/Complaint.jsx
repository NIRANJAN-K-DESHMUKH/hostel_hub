import React from 'react'

function Complaint() {
    return (
        <div>
            <h1 className='title'>Complaint</h1>
            <form className='complaintForm'>
                <input type='text' placeholder='Enter your complaint' className='complaintInput'></input>
                <button className='complaintButton'>Submit</button>
            </form>
        </div>
    )
}

export default Complaint