import mongoose from "mongoose";

//schema design
const complaintSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required and should be unique"],
      unique: true,
    },
    room_number: {
      type: String,
      required: [true, "room number is required"],
    },
    phone_no: {
        type: String,
        required: [true, "phone number is required"],
    },
    comments: {
        type: String,
        required: [true, "comments are required"],
      }
  },
  { timestamps: true }
);

//export
const complaintModel = mongoose.model("complaints", complaintSchema);

export default complaintModel;
