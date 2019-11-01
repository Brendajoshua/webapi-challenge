const express = require('express');
const helmet = require("helmet");
const cors = require ("cors");

const server = express();

//import router
const projectRouter = require("./routers/projectRouter");

//set up global middleware
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger);

//set up router
server.use("/api/projects", projectRouter);

//Initial get request
server.get("/", (req, res) => {
    res.send(`<h1>Have fun at sprint!</h1>`);
});

//logger middleware
function logger (req,res, next) {
    console.log(req.method, req.url, Date.now())
    next();
};

module.exports = server;