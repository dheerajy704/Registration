const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel =  require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors({
    origin:[
        'http://localhost:3000', 'http://localhost:5173'
    ],
    credentials:true,
}));

mongoose.connect("mongodb+srv://Dheeraj:1234567890@cluster0.8pe39xe.mongodb.net/employee");

app.post("/login", (req ,res) => {
    const {email , password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
            res.json("Success")
        }else{
            res.json("the password is incorrect")
        }
        }else{
            res.json("No record existed")
        }
    })
})

app.post('/register',(req , res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3000 , () => {
    console.log("server is running ")
})