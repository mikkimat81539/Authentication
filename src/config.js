// Creating database connection

const mongoose = require('mongoose')
const connect = mongoose.connect("mongodb://127.0.0.1:27017/Login_auth")

// check database connection
connect.then(() => {
    console.log("Database connected succesfully")
})

.catch(() => {
    console.log("Database connected unsuccesfully")
})

// create a schema : a representation of a plan or theory in the form of an outline
const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

// Create a model
const collection = new mongoose.model("users", loginSchema)

//export the model
module.exports = collection