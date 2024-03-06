import React from 'react';
import './complaint.css';
import axios from "axios";

function Complaint(props) {

    const toShow = props.show;

    const handleSubmit = (event) => {
      event.preventDefault();
    // console.log(event.target.comments.value);

      axios.post('/postcomplaint', {
        name: "Niranjan",
        email: "email@gmail.com",
        room_number: "123",
        phone_no: "9999999981",
        comments: event.target.comments.value
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    return (
      <>
        { toShow 
            ? <div className='complaintwrapper'>
                <h1 className='title'>Complaint</h1>
                <form className='complaintForm' onSubmit={handleSubmit}>
                    <p name="studName" className='studentdetails'>Name: Nimesh Bhavsar</p>
                    <p name="studRoomNo" className='studentdetails'>Room Number: 101</p>
                    <p name="studPhoneNo" className='studentdetails'>Phone Number: 1234567890</p>
                    <p name="studEmailId" className='studentdetails'>Email: email@gmail.com</p>
                    {/* <p name="comments" className='studentdetails'>Complaint Request</p> */}
                    <textarea name="comments" placeholder='Comments' className='complaintInput'></textarea>
                    <button type="submit" className='complaintButton'>Submit Request</button>
                </form>
              </div> 
            : <></> 
        }
      </>
        
    )
}

export default Complaint;