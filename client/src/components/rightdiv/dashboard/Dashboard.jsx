import { useEffect, useState } from "react";
import axios from "axios";
import CleaningCard from "../roomcleaning/cleaningEntry/CleaningCard";
import ComplaintCard from "../complaint/complaintEntry/ComplaintCard";
import { useSelector } from "react-redux";
import "./dashboard.css";

const Dashboard = (props) => {
    const toShow = props.show;
    const [cleaningReqs, setCleaningReqs] = useState([]);
    const [complaints, setComplaints] = useState([]);

    const student = useSelector((state) => {
      return state.Reducers.user;
    });
    const showComponents = useSelector((state) => {
      return state.Reducers.showComponents;
    });
    
    useEffect(() => {
      const fetchCleaningReqs = async () => {
        if(student) {
          try {
            const res = await axios.post("/api/cleaningreq/all/" + student.studentRegNo, {isStudent: true});
            // console.log(res.data);
  
            // setCleaningReqs(
            //   res.data.sort((p1, p2) => {
            //     return new Date(p2.createdAt) - new Date(p1.createdAt);
            //   })
            // );
            setCleaningReqs(
              res.data
            );
            // console.log(cleaningReqs);
          } catch (error) {
            console.log(error)
          }
        } else {
          console.log("Student not signed in!");
        }
        
      };

      const fetchComplaints = async () => {
        try {
          const res = await axios.post("/api/complaint/all/" + student.studentRegNo, {isStudent: true});
              // console.log(res.data);

          setComplaints(
            res.data.reverse()
          );
          // console.log(cleaningReqs);
        } catch (error) {
          console.log(error)
        }
      };

      fetchCleaningReqs();
      fetchComplaints();

    },[showComponents]);

    return (
      <>
        { toShow 
            ? <div className='dashboardwrapper'>
                 <h1 className='title'>Dashboard</h1>
                 <div>
                  <h2>Cleaning Reqs:</h2>
                  <table>
                    <tr>
                      <td>Student Reg No:</td>
                      <td>Room Number:</td>
                      <td>Student Comments:</td>
                      <td>isCompletedStatus:</td>
                      <td>updatedAt:</td>
                    </tr>
                      <tr>
                      {cleaningReqs.map((c) => (
                        c.map((cc) => (
                          <CleaningCard key={cc._id} cleaningreq={cc} />
                        ))
                      ))}
                      </tr>
                  </table>
                 
                  
                 </div>
                 <div>
                 <h2>Complaints:</h2>
                 <table>
                    <tr>
                      <td>Student Reg No:</td>
                      <td>Room Number:</td>
                      <td>Student Comments:</td>
                      <td>isResolvedStatus:</td>
                      <td>updatedAt:</td>
                    </tr>
                      <tr>
                      {complaints.map((cc) => (
                          <ComplaintCard key={cc._id} complaint={cc} />
                        ))}
                      </tr>
                  </table>
                 
                 </div>
             </div> 
            : <></> }
      </>
    )
}

export default Dashboard;