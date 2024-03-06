import http from "http";       // Import Node.js core module
import mongoose from 'mongoose';
import 'dotenv/config';
import { log } from 'console';
import express from "express";
import bodyParser from "body-parser";
import complaintModel from "./models/complaintModel.js";

// const express = require('express'); // Import express

const port = 8080;  // Define a port
const app = express();   // Import express
app.use(express.json()); // to support JSON-encoded bodies
app.use(bodyParser.json({ type: 'application/*+json' }));

// app.use("/hostel/complaints")


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
}); //the server object listens on port 8080

app.get('/compreq/', (req, res) => {

    const { id } = req.body;
    const { message } = req.body;
    res.status(200);
    if (!id) {
        res.status(418);
        res.send({ message: 'We need a id!' });

    }
    else
        res.send({
            "Name": "Nimesh Bhavsar",
            "Room Number": "101",
            "Phone Number": "1234567890",
            "Message": `${message}`
        });
});


try {
    mongoose.connect("mongodb+srv://niranjandeshmukh371:"+process.env.PASS+"@cluster0.gyghlfc.mongodb.net/"); 
    console.log("Database connection success!");
} catch (e){
    console.log(e);
}

 app.post("/postcomplaint", function (req, res) {
    const complaint = new complaintModel({
      name: req.body.name,
      email: req.body.email,
      room_number: req.body.room_number,
      phone_no: req.body.phone_no,
      comments: req.body.comments
    });
    try {
        complaint.save();
        res.send(complaint);

    } catch (e){
        console.log(e);
    }
    
 });