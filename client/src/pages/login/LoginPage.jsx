import "./login.css";
import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import axios from "axios";
import { LoginStart, LoginSuccess, LoginFailure } from '../../reducer_actions/Actions.jsx';
import { CircularProgress } from "@material-ui/core";


const LoginPage = () => {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => {
    return state.Reducers.isFetching;
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(LoginStart());
    try {
      const res = await axios.post("/api/auth/login", { studentEmail: email.current.value, password: password.current.value });
      dispatch(LoginSuccess(
        {
          studentName: res.data.studentName,
          studentEmail: res.data.studentEmail, 
          studentRegNo: res.data.studentRegNo, 
          room_number: res.data.room_number, 
          studentPhone_no: res.data.studentPhone_no, 
          hostelBlockName: res.data.hostelBlockName, 
          hostelFloorNo: res.data.hostelFloorNo
        }));
    } catch (err) {
     dispatch(LoginFailure());
    }
  };

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="leftDiv">
          <img src="assets/landingPageImage.png" alt="" className="leftImg" />
        </div>
        <div className="rightDiv">

          <form className="loginform" onSubmit={handleSubmit}>
            <h1 id="loginformtitle">Hostel Hub</h1>
            <label className="loginformlabel">Username</label>
            <input 
              type="email" 
              className="loginforminput" 
              placeholder="Enter your vit-email as username"
              required
              autoComplete="true"
              ref={email}
            />

            <br /><br />
            <label className="loginformlabel">Password</label>
            <input 
              type="password" 
              className="loginforminput" 
              placeholder="Enter your Reg. No. as password"
              minLength="8"
              autoComplete="true"
              required
              ref={password}
            />

            <br /><br />

            {/* <Link to="/dashboard" style={{ textDecoration: "none" }}> */}
              <button type="submit" id="submitbutton">
                {isFetching ? ( <CircularProgress color="inherit" size="30px"/> ) : ( "Login" )}
              </button>
            {/* </Link> */}

          </form>
        </div>

      </div>

    </div>

  );
};
export default LoginPage;