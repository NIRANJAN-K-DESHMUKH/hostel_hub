import React from 'react'
import './complaint.css'

function Complaint(props) {

    const toShow = props.show;
    return (
      <>
        { toShow 
            ? <div className='complaintwrapper'>
                <h1 className='title'>Complaint</h1>
                <form className='complaintForm'>
                    <p className='studentdetails'>Name: Nimesh Bhavsar</p>
                    <p className='studentdetails'>Room Number: 101</p>
                    <p className='studentdetails'>Phone Number: 1234567890</p>
                    <p className='studentdetails'>Complaint Request</p>
                    <textarea id='comments' placeholder='Comments' className='complaintInput'></textarea>
                    <button className='complaintButton' >Submit Request</button>
                </form>
              </div> 
            : <></> 
        }
      </>
        
    )
}

export default Complaint;