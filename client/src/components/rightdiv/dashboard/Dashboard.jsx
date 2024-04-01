import { useEffect, useState } from "react";
import axios from "axios";
import CleaningCard from "../cleaningEntry/CleaningCard";

const Dashboard = (props) => {
    const toShow = props.show;
    const [cleaningReqs, setCleaningReqs] = useState([]);
    const studentRegNo = "20BCT0220";
    
    useEffect(() => {
      const fetchCleaningReqs = async () => {
        try {
          const res = await axios.post("/api/cleaningreq/all/" + studentRegNo, {isStudent: true});
          // setCleaningReqs(
          //   res.data.sort((p1, p2) => {
          //     return new Date(p2.createdAt) - new Date(p1.createdAt);
          //   })
          // );
          setCleaningReqs(
            res.data
          );
          console.log(cleaningReqs);
        } catch (error) {
          console.log(error)
        }
      };
      fetchCleaningReqs();
    },[studentRegNo]);

    // const fetchCleaningReqs = async () => {
    //   try {
    //     const res = await axios.post("/api/cleaningreq/all/" + studentRegNo, {isStudent: true});
    //     // const res = await axios(
    //     //   {method: "get",
    //     //   url: "/api/cleaningreq/all/20BCT0220",
    //     //   data: [{
    //     //     isStudent: "true",
    //     //   }]
    //     // });
    //     // setCleaningReqs(
    //     //   res.data.sort((p1, p2) => {
    //     //     return new Date(p2.createdAt) - new Date(p1.createdAt);
    //     //   })
    //     // );
    //     // setCleaningReqs(
    //     //   res
    //     // );
    //     console.log(res);
    //   } catch (error) {
    //     console.log(error)
    //   }
    // };

    return (
      <>
        { toShow 
            ? <div className='dashboardwrapper'>
                 <h1 className='title'>Dashboard</h1>
                 <div>
                    {cleaningReqs.map((c) => (
                      <CleaningCard key={c[0]._id} clean={c[0].studentRegNo} />
                    ))}
                 </div>
                 <span>hello</span>
             </div> 
            : <></> }
      </>
    )
}

export default Dashboard;