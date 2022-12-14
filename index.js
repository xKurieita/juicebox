require('dotenv').config()

const {PORT = 3000} = process.env;
const express = require("express");
const server = express();
const morgan = require("morgan");
server.use(morgan("dev"));
const cors = require("cors");
server.use(cors());

server.use(express.json());
const { client } = require('./db')
client.connect();


const apiRouter = require('./api');
server.use('/api',apiRouter);


server.use((req,res,next) => {
    

    next();
})







server.listen(PORT,() => {
    console.log("The server is up on",PORT)
})