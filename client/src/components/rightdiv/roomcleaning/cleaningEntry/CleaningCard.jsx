
const CleaningCard = (props) => {
    const cleaningreq = props.cleaningreq;

    return (
      <>
       { 
       <div className="tableHead">
        
          <span className="headings">{cleaningreq.studentRegNo}</span>
      
          <span className="headings">{cleaningreq.room_number}</span>
    
          <span className="studentComments">{cleaningreq.studentComments ? cleaningreq.studentComments : "-"}</span>
      
          <span className="headings">{cleaningreq.isCompletedStatus ? "true" : "false"}</span>

          {/* <span className="headings">{cleaningreq.updatedAt.slice(0, 10)+" "+cleaningreq.updatedAt.slice(11, 13)}</span> */}
          <span className="headings">{new Date(cleaningreq.createdAt).toLocaleDateString()} {new Date(cleaningreq.createdAt).toLocaleTimeString()}</span>
        </div>
      } 
      </>
    )
}

export default CleaningCard;