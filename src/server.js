const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')

const app = express()

// use EJS as a view engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("login")
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.listen(3000, () => {
    console.log('server is running')
})