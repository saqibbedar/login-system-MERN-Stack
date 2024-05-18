const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require("./Models/users")

const app = express()

app.use(cors({
    origin:["https://login-system-frontend-lcj9ctbl0-saqib-bedars-projects.vercel.app"],
    methods: ['GET', 'POST', 'DELETE'],
    credential: true,
}));

app.use(express.json());

// require .env
require('dotenv').config()

// database 
mongoose.connect(process.env.MONGO_URL);

// **********API's**********
app.post('/sign-up', (req, res)=>{
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err=> res.json(err))
})

app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    userModel.findOne({email})
    .then(user =>{
        if(user){
            if(user.password === password) 
                res.json({status: "success", id: user._id});
            else 
                res.json("Incorrect Password!")
        } else {
            res.json("No record found!")
        }
    })
    .catch(err=> res.json(err))
})

app.get("/getUser/:id", (req, res)=>{
    const id = req.params.id;
    userModel.findById({_id:id})
    .then(user => res.json(user))
    .catch(err=> res.json(err))
})

app.delete("/deleteUser/:id", (req, res)=>{
    const id = req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then(user=>res.json(user))
    .then(err=> res.json(err))
})

const port = process.env.PORT

// start server
app.listen(port, ()=>{
    console.log("server connected successfully!");
})