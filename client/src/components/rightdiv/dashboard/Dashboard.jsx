import { useState } from "react";

const Dashboard = (props) => {
    const toShow = props.show;
    const [cleaningReqs, setCleaningReqs] = useState([]);
    return (
      <>
        { toShow 
            ? <div className='dashboardwrapper'>
                 <h1 className='title'>Dashboard</h1>
                 <div>
                    {cleaningReqs.map((c) => (
                      <span>c</span>
                    ))}
                 </div>
             </div> 
            : <></> }
      </>
    )
}

export default Dashboard;