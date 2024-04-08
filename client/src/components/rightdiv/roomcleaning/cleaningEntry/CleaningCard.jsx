
const CleaningCard = (props) => {
    const cleaningreq = props.cleaningreq;

    return (
      <>
       { 
       <div>
        
          <td>{cleaningreq.studentRegNo}</td>
      
          <td>{cleaningreq.room_number}</td>
    
          <td>{cleaningreq.studentComments}</td>
      
          <td>{cleaningreq.isCompletedStatus ? "true" : "false"}</td>

          <td>{cleaningreq.updatedAt}</td>
      </div>
      } 
      </>
    )
}

export default CleaningCard;