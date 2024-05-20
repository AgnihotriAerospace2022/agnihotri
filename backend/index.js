const express  = require('express');
const mongoose = require("mongoose");
const cors = require("cors")

const app  = express();
app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
    res.send("hello");
});

app.post("/userDetails",(req,res)=>{
    res.send("data received");
})

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("connected to db");
    app.listen(3003 ,()=> {
        console.log("connected to port 3003");
    });f
})
.catch(()=>{
    console.log("connecttion failed");
})

