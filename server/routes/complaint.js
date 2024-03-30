import Complaint from "../models/Complaint.js";
import express from "express";
const router = express.Router();


// create
router.post("/register", async (req, res) => {
    if(req.body.isStudent) {
        try {

            //create new complaint
            const newComplaint = new Complaint({
              studentRegNo: req.body.studentRegNo,
              room_number: req.body.room_number,
              studentComments: req.body.studentComments,
              workerId: req.body.workerId,
              isResolvedStatus: req.body.isResolvedStatus,
              otp: req.body.otp,
              email: req.body.email
            });
        
            //save complaint and respond
            const complaint = await newComplaint.save();
            return res.status(200).json(complaint);
          } catch (err) {
            return res.status(500).json(err);
          }    
    } else {
        return res.status(403).json("You are not Student!");
    }
}); 
    
// // read (get a complaint)
// router.get("/", async (req, res) => {
//     if(req.body.isStudent) {
//         try {
//         const complaint = await Complaint.findOne({workerId: req.query.workerId});
//         res.status(200).json(complaint);
//         } catch (err) {
//         return res.status(500).json(err);
//         }
//     } else {
//         return res.status(403).json("You are not Student!");
//     }
//   });

// // update complaint
// router.put("/:id", async (req, res) => {
//     if(req.body.isStudent) {
//       try {
//         const complaint = await Complaint.findOneAndUpdate({workerId: req.params.id}, {
//           $set: req.body
//         });
//         return res.status(200).json("complaint has been updated");
//       } catch (err) {
//         return res.status(500).json(err);
//       }
//     } else {
//         return res.status(403).json("You are not Student!");
//     }
//   });


// // delete
// router.delete("/:id", async (req, res) => {
//     if (req.body.isStudent) {
//       try {
//         await Complaint.findOneAndDelete({workerId: req.params.id});
//         res.status(200).json("complaint has been deleted");
//       } catch (err) {
//         return res.status(500).json(err);
//       }
//     } else {
//       return res.status(403).json("You are not Student!");
//     }
//   });


export { router as complaintRoute };
