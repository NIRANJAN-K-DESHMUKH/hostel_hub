const http = require('http');

const express = require('express'); // Import express

const port = 8080;  // Define a port
const app = require('express')();   // Import express
app.use(express.json()); // to support JSON-encoded bodies

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