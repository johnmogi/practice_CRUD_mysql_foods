const express = require("express");
const cors = require("cors");
const dishController = require("./controller/dish");
const server = express();
server.use(cors()); 
server.use(express.json()); 
server.use("/api", dishController); 
server.listen(3000, () => console.log("Listening on http://localhost:3000"));