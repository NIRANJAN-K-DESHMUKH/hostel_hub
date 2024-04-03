import React, { useState } from 'react';
import './roomcleaning.css';
import axios from "axios";
import { useSelector } from 'react-redux';

function Roomcleaning(props) {
    const toShow = props.show;
    const [comments, setComments] = useState("");

    const student = useSelector((state) => {
      return state.Reducers.user;
    });
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if(student){
        try {
          const res = await axios.post("/api/cleaningreq/register", 
            { studentRegNo: student.studentRegNo,
              room_number: student.room_number,
              studentComments: comments,
              isStudent: true
            }
          );
          setComments("");
        } catch (error) {
          console.log("Error in posting cleaning req");
        }
      } else {
        console.log("Student not signed in!");
      }
    }

    return (
      <>
        { toShow 
            ? <div className='roomcleaningwrapper'>
                <h1 className='title'>Room Cleaning</h1>
                <form className='roomcleaningForm' onSubmit={handleSubmit}>
                  <p name="studName" className='studentdetails'>Name: {student.studentName}</p>
                  <p name="studRoomNo" className='studentdetails'>Hostel Block - Room No.: {student.hostelBlockName}-{student.room_number}</p>

                    {/* <p name="studName" className='studentdetails'>Reg. No.: {student.studentRegNo}</p>
                    <p name="studRoomNo" className='studentdetails'>Hostel Block: {student.hostelBlockName}</p>
                    <p name="studRoomNo" className='studentdetails'>Floor No.: {student.hostelFloorNo}</p>
                    <p name="studRoomNo" className='studentdetails'>Room Number: {student.room_number}</p>
                    <p name="studPhoneNo" className='studentdetails'>Phone Number: {student.studentPhone_no}</p>
                    <p name="studEmailId" className='studentdetails'>Email: {student.studentEmail}</p> */}
                    <textarea name="comments" placeholder='Any instructions?' className='complaintInput' value={comments} onChange={(e) => setComments(e.target.value)} ></textarea>
                    <button type="submit" className='complaintButton'>Submit Request</button> 
                </form>
              </div> 
            : <></> 
        }
      </>
    )
}

export default Roomcleaning;