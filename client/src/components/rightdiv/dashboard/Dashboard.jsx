import React from 'react'
function Dashboard(props) {
    const toShow = props.show;
    return (
      <>
        { toShow 
            ? <div className='dashboardwrapper'>
                 <h1 className='title'>Dashboard</h1>
             </div> 
            : <></> }
      </>
        // {
        //     toShow 
        //     ? 
        //     <div className='dashboardwrapper'>
        //         <h1 className='title'>Dashboard</h1>
        //     </div>
        //     : <></>
        // }
        
    )
}

export default Dashboard