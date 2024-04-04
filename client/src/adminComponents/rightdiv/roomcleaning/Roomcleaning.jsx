import React, { useEffect, useState } from 'react';
import './roomcleaning.css';
import axios from "axios";
import { useSelector } from 'react-redux';
import CleaningCard from "../roomcleaning/cleaningEntry/CleaningCard";


function Roomcleaning(props) {
    const toShow = props.show;

    const [cleaningReqs, setCleaningReqs] = useState([]);

    const admin = useSelector((state) => {
      return state.Reducers.admin;
    });

    const showComponents = useSelector((state) => {
      return state.Reducers.showComponentsAdmin;
    });

    useEffect(() => {
      const fetchCleaningReqs = async () => {
        if(admin) {
          try {
            const res = await axios.get("/api/cleaningreq/admin");
            // console.log("cleaningReqs");
  
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
          console.log("Admin not signed in!");
        }
        
      };

      fetchCleaningReqs();
  }, [showComponents]);
  
    return (
      <>
        { toShow 
            ? <div className='dashboardwrapper'>
                 <h1 className='title'>Room Cleaning Requests:</h1>
                 <div>
                      <CleaningCard cleaningreqs={JSON.stringify(cleaningReqs)} />
                 </div>
             </div> 
            : <></> 
        }
      </>
    )
}

export default Roomcleaning;