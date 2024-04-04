import { useEffect, useState } from "react";
import axios from "axios";
import CleaningCard from "../roomcleaning/cleaningEntry/CleaningCard";
import ComplaintCard from "../complaint/complaintEntry/ComplaintCard";
import { useSelector } from "react-redux";

const Dashboard = (props) => {
    const toShow = props.show;
    // const [cleaningReqs, setCleaningReqs] = useState([]);
    // const [complaints, setComplaints] = useState([]);
    // const student = useSelector((state) => {
    //   return state.Reducers.user;
    // });
    // const showComponents = useSelector((state) => {
    //   return state.Reducers.showComponents;
    // });
    
    // useEffect(() => {
    //   const fetchCleaningReqs = async () => {
    //     if(student) {
    //       try {
    //         const res = await axios.post("/api/cleaningreq/all/" + student.studentRegNo, {isStudent: true});
    //         // console.log("cleaningReqs");
  
    //         // setCleaningReqs(
    //         //   res.data.sort((p1, p2) => {
    //         //     return new Date(p2.createdAt) - new Date(p1.createdAt);
    //         //   })
    //         // );
    //         setCleaningReqs(
    //           res.data
    //         );
    //         // console.log(cleaningReqs);
    //       } catch (error) {
    //         console.log(error)
    //       }
    //     } else {
    //       console.log("Student not signed in!");
    //     }
        
    //   };

    //   const fetchComplaints = async () => {
    //     try {
    //       const res = await axios.post("/api/complaint/all/" + student.studentRegNo, {isStudent: true});
    //           // console.log(res.data);

    //       setComplaints(
    //         res.data
    //       );
    //       // console.log(cleaningReqs);
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   };

    //   fetchCleaningReqs();
    //   fetchComplaints();

    // },[showComponents]);

    return (
      <>
        { toShow 
            ? 
            <div className='dashboardwrapper'>
                 <h1 className='title'>Dashboard</h1>
                 {/* <div>
                      <CleaningCard cleaningreqs={JSON.stringify(cleaningReqs)} />
                 </div>
                 <div>
                      <ComplaintCard complaints={JSON.stringify(complaints)} />
                 </div> */}
             </div> 
            : <></> }
      </>
    )
}

export default Dashboard;