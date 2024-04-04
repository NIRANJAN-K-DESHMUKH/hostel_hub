import React, { useState } from 'react';
import './complaint.css';
import axios from "axios";
import { useSelector } from 'react-redux';


function Complaint(props) {

    const toShow = props.show;
    // const [comments, setComments] = useState("");

    // const student = useSelector((state) => {
    //   return state.Reducers.user;
    // });
  
    // const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   if(student){
    //     try {
    //       const res = await axios.post("/api/complaint/register", 
    //         { studentRegNo: student.studentRegNo,
    //           room_number: student.room_number,
    //           studentComments: comments,
    //           isStudent: true
    //         }
    //       );
    //       setComments("");
    //     } catch (error) {
    //       console.log("Error in posting complaint");
    //     }
    //   } else {
    //     console.log("Student not signed in!");
    //   }
      
    // }

    return (
      <>
        { 
          toShow 
            ? <>comp</>
          // <div className='complaintwrapper'>
          //       <h1 className='title'>Complaint</h1>
          //       <form className='complaintForm' onSubmit={handleSubmit}>
          //           <p name="studName" className='studentdetails'>Name: {student.studentName}</p>
          //           {/* <p name="studName" className='studentdetails'>Reg. No.: {student.studentRegNo}</p> */}
          //           <p name="studRoomNo" className='studentdetails'>Hostel Block - Room No.: {student.hostelBlockName}-{student.room_number}</p>
          //           {/* <p name="studRoomNo" className='studentdetails'>Floor No.: {student.hostelFloorNo}</p> */}
          //           {/* <p name="studRoomNo" className='studentdetails'>Room Number: {student.room_number}</p> */}
          //           {/* <p name="studPhoneNo" className='studentdetails'>Phone Number: {student.studentPhone_no}</p> */}
          //           {/* <p name="studEmailId" className='studentdetails'>Email: {student.studentEmail}</p> */}
          //           <textarea name="comments" placeholder='Please explain your Complaint.' className='complaintInput' value={comments} onChange={(e) => setComments(e.target.value)} required></textarea>
          //           <button type="submit" className='complaintButton'>Submit Request</button>
          //       </form>
          //     </div> 
            : <></> 
        }
      </>
        
    )
}

export default Complaint;