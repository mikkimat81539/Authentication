const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')
const collection = require('./config')
const { name } = require('ejs')

const app = express()

//Convert data into JSON format
app.use(express.json())

app.use(express.urlencoded({extended: false}))

// use EJS as a view engine
app.set('view engine', 'ejs');

// connecting public folder
app.use(express.static("public"))

// connecting user and login page
app.get("/", (req, res) => {
    res.render("login")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

//Register user
app.post("/signup", async (req, res) => {
    
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    //Check if user already exists
    const existingUser = await collection.findOne({name: data.name})
    if (existingUser) {
        res.send("User already exist. Please choose a different username.")
    }

    else {
        // hash password
        const saltRounds = 10
        const hashPassword = await bcrypt.hash(data.password, saltRounds)

        data.password = hashPassword // replace password with hashed password

        const userdata = await collection.insertMany(data)
        console.log(userdata)
        res.render("home");
    }

})

// Login users

app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({
            name: req.body.username,
        })

        if(!check) {
            res.send("username not found")
        }
        
        // compare hashed password from database
        const passwordMatch = await bcrypt.compare(req.body.password, check.password)

        if (passwordMatch) {
            res.render("home");
        }

        else {
            req.send("wrong password")
        }
    }

    catch {
        res.send("wrong details")
    }
})

app.listen(3000, () => {
    console.log('server is running')
})