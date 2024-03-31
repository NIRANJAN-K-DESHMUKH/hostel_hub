import mongoose from "mongoose";

//schema design
const cleaningreqSchema = new mongoose.Schema(
  {
    studentRegNo: {
      type: String,
      required: [true, "RegNo is required"],
      unique: true,
    },
    room_number: {
      type: String,
      required: [true, "room number is required"]
    },
    studentComments: {
        type: String,
    },
    workerId: {
      type: String
    },
    isCompletedStatus: {
      type: Boolean,
      required: [true, "status is required"]
    },
    otp: {
      type: String
    }
  },
  { timestamps: true }
);

//export
const CleaningReq= mongoose.model("cleaningreq", cleaningreqSchema);

export default CleaningReq;
