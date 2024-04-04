import React from 'react';
import "./worker.css";

const Worker = (props) => {
    const toShow = props.show;

    return (
        <>
        {
            toShow 
            ? 
            <div className=''>
            worker
            </div>
            :
            <></>
            
        }
        </>
        
    )
}

export default Worker;

