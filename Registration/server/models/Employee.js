const mongoose = require('mongoose')

const EmpoyeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}) 

const EmployeeModel = mongoose.model("employees", EmpoyeeSchema)
module.exports = EmployeeModel