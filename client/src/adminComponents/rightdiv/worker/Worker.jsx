import React, { useEffect, useState } from 'react';
import './worker.css';
import axios from "axios";
import { useSelector } from 'react-redux';
import WorkerCard from "../worker/workerEntry/WorkerCard";


const Worker = (props) => {
  
    const toShow = props.show;

    const [workers, setWorkers] = useState([]);

    const admin = useSelector((state) => {
      return state.Reducers.admin;
    });

    const showComponents = useSelector((state) => {
      return state.Reducers.showComponentsAdmin;
    });

    useEffect(() => {
      const fetchWorkers = async () => {
        if(admin) {
          try {
            const res = await axios.get("/api/worker/admin");
            // console.log("cleaningReqs");
  
            // setWorkers(
            //   res.data.sort((p1, p2) => {
            //     return new Date(p2.createdAt) - new Date(p1.createdAt);
            //   })
            // );
            setWorkers(
              res.data
            );
            // console.log(cleaningReqs);
          } catch (error) {
            console.log(error)
          }
        } else {
          console.log("Admin not signed in!");
        }
        
      };

      fetchWorkers();
  }, [showComponents]);
  
    return (
      <>
        { toShow 
            ? <div className='dashboardwrapper'>
                 <h1 className='title'>Workers:</h1>
                 <div>
                    <WorkerCard workers={JSON.stringify(workers)} />
                 </div>
             </div> 
            : <></> 
        }
      </>
    )
}

export default Worker;