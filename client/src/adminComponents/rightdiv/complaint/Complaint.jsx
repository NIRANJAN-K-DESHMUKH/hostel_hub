import React, { useEffect, useState } from 'react';
import './complaint.css';
import axios from "axios";
import { useSelector } from 'react-redux';
import ComplaintCard from "../complaint/complaintEntry/ComplaintCard";


const Complaint = (props) => {

    const toShow = props.show;

    const [complaints, setComplaints] = useState([]);

    const admin = useSelector((state) => {
      return state.Reducers.admin;
    });

    const showComponents = useSelector((state) => {
      return state.Reducers.showComponentsAdmin;
    });

    useEffect(() => {
      const fetchComplaints = async () => {
        if(admin) {
          try {
            const res = await axios.get("/api/complaint/admin");
  
            // setComplaints(
            //   res.data.sort((p1, p2) => {
            //     return new Date(p2.createdAt) - new Date(p1.createdAt);
            //   })
            // );
            setComplaints(
              res.data
            );
            // console.log(complaint);
          } catch (error) {
            console.log(error)
          }
        } else {
          console.log("Admin not signed in!");
        }
        
      };

      fetchComplaints();
  }, [showComponents]);
  

    return (
      <>
        { toShow 
            ? <div className='dashboardwrapper'>
                 <h1 className='title'>Complaints:</h1>
                 <div>
                      <ComplaintCard complaints={JSON.stringify(complaints)} />
                 </div>
             </div> 
            : <></> 
        }
      </>
        
    )
}

export default Complaint;