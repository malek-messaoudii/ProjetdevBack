const express = require('express')
const mongoose = require('mongoose')
const cors = require ('cors')
const User = require ('./models/user')

const app=express()

app.use(express.json())

app.use(cors())

app.post('/Createuser', (req,res)=> {
      User.create(req.body)
      .then (usr=> res.json(usr))
      .catch (err=> res.json(err))
})

app.listen(3001, ()=> {
    console.log('server is running')
})