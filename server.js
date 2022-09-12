require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')



const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/holiday'
mongoose.connect(MONGO_URI, {}, ()=> { console.log('connected to mongoDB')})
const app = express()


app.use(express.json())


