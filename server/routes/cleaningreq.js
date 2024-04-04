import CleaningReq from "../models/CleaningReq.js";
import Student from "../models/Student.js";
import express from "express";
const router = express.Router();


// create
router.post("/register", async (req, res) => {
    if(req.body.isStudent) {
        try {

            //create new cleaningreq
            const newCleaningReq = new CleaningReq({
              studentRegNo: req.body.studentRegNo,
              room_number: req.body.room_number,
              studentComments: req.body.studentComments,
              workerId: "",
              isCompletedStatus: false,
              otp: Math.floor(100000 + Math.random() * 900000)
            });
           
            //save cleaningreq and respond
            const cleaningreq = await newCleaningReq.save();
             return res.status(200).json(cleaningreq);
          } catch (err) {
            return res.status(500).json(err);
          }    
    } else {
        return res.status(403).json("You are not Student!");
    }
}); 
    
// read (get a cleaningreq)
router.get("/", async (req, res) => {
    if(req.body.isStudent) {
        try {
        const cleaningreq = await CleaningReq.findById(req.query.cleaningreqId);
        res.status(200).json(cleaningreq);
        } catch (err) {
        return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You are not Student!");
    }
});

//get all cleaningreqs by all roommates
router.post("/all/:studentRegNo", async (req, res) => {
  if(req.body.isStudent) {
    try {
      const currentStudent = await Student.findOne({studentRegNo: req.params.studentRegNo});  
      const roommates = await Student.find({room_number: currentStudent.room_number});
      const allRoommatesCleaningReqs = await Promise.all (
        roommates.map((student) => {
          return CleaningReq.find({ studentRegNo: student.studentRegNo });
        })
      );

      return res.status(200).json(allRoommatesCleaningReqs);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You are not Student!");
  }
});

//get all cleaningreqs for admin
router.get("/admin", async (req, res) => {
    try {
      const allAdminCleaningReqs = await CleaningReq.find({});  

      return res.status(200).json(allAdminCleaningReqs);
    } catch (err) {
      return res.status(500).json(err);
    }
});

// update cleaningreq
router.put("/:id", async (req, res) => {
    if(req.body.isStudent) {
      try {
        const cleaningreq = await CleaningReq.findByIdAndUpdate(req.params.id, {
          $set: req.body
        });
        return res.status(200).json("cleaningreq has been updated");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
        return res.status(403).json("You are not Student!");
    }
});


// delete
router.delete("/:id", async (req, res) => {
    if (req.body.isStudent) {
      try {
        await CleaningReq.findByIdAndDelete(req.params.id);
        res.status(200).json("cleaningreq has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You are not Student!");
    }
});


export { router as cleaningreqRoute };
