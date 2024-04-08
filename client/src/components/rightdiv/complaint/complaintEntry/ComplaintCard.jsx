
const ComplaintCard = (props) => {
  const complaint = props.complaint;


    return (
      <>
       { 
       <div>
        
          <td>{complaint.studentRegNo}</td>
      
          <td>{complaint.room_number}</td>
    
          <td>{complaint.studentComments}</td>
      
          <td>{complaint.isResolvedStatus ? "true" : "false"}</td>

          <td>{complaint.updatedAt}</td>
      </div>
      } 
      </>
    )
}

export default ComplaintCard;


