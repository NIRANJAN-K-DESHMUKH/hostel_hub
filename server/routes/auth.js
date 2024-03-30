import Student from "../models/Student.js";
import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();

//register new student
router.post("/register", async (req, res) => {
    try {
      //generate new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
      //create new student
      const newStudent = new Student({
        studentName: req.body.studentName,
        studentRegNo: req.body.studentRegNo,
        password: hashedPassword,
        room_number: req.body.room_number,
        studentEmail: req.body.studentEmail,
        studentPhone_no: req.body.studentPhone_no,
        hostelBlockName: req.body.hostelBlockName,
        hostelFloorNo: req.body.hostelFloorNo
      });
  
      //save student and respond
      const student = await newStudent.save();
      return res.status(200).json(student);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

  //login student
  router.post("/login", async (req, res) => {
    try {
      const student = await Student.findOne({ studentEmail: req.body.studentEmail });
    
      if(!student) {
        return res.status(404).json("student not found");
      } else {
        const validPassword = await bcrypt.compare(req.body.password, student.password);
        if(!validPassword) {
            return res.status(400).json("wrong password");
          }
      }
      return res.status(200).json(student);
    } catch (err) {
      return res.status(500).json(err);
    }
  });






export { router as authRoute };
