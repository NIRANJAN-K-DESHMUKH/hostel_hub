import mongoose from "mongoose";

//schema design
const complaintSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, "name is required"],
    },
    studentEmail: {
      type: String,
      required: [true, "email is required and should be unique"],
      unique: true,
    },
    room_number: {
      type: String,
      required: [true, "room number is required"],
    },
    studentPhone_no: {
        type: String,
        required: [true, "phone number is required"],
    },
    studentComments: {
        type: String,
        required: [true, "comments are required"],
    },
    workerId: {
      type: String
    },
    isResolvedStatus: {
      type: Boolean,
      required: [true, "status is required"],
    }
  },
  { timestamps: true }
);

//export
const complaintModel = mongoose.model("complaints", complaintSchema);

export default complaintModel;