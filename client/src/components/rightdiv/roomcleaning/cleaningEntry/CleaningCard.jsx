
const CleaningCard = (props) => {
    const cleaningreq = props.cleaningreq;

    return (
      <>
       { 
       <div className="tableHead">
        
          <span className="headings">{cleaningreq.studentRegNo}</span>
      
          <span className="headings">{cleaningreq.room_number}</span>
    
          <span className="studentComments">{cleaningreq.studentComments}</span>
      
          <span className="headings">{cleaningreq.isCompletedStatus ? "true" : "false"}</span>

          <span className="headings">{cleaningreq.updatedAt}</span>
        </div>
      } 
      </>
    )
}

export default CleaningCard;