import { useSelector } from "react-redux";
import "./profile.css";

const Profile = (props) => {

    const toShow = props.show;
    
    const admin = useSelector((state) => {
        return state.Reducers.admin;
      });

    return (
        <>
        { toShow 
            ? 
            <div>
                <h1>admin profile page </h1>
                <p name="studName" className='admindetails'>Name: {admin.adminName}</p>
                <p name="studRoomNo" className='admindetails'>Hostel Block: {admin.hostelBlockName}</p>
                <p name="studPhoneNo" className='admindetails'>Phone Number: {admin.adminPhone_no}</p>
                <p name="studEmailId" className='admindetails'>Email: {admin.adminEmail}</p> 
            </div>
            : <></>
        }
        </>
    );
};

export default Profile;