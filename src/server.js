const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')
const collection = require('./config')

const app = express()

// use EJS as a view engine
app.set('view engine', 'ejs');

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("login")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.listen(3000, () => {
    console.log('server is running')
})