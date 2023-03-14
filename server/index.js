const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db"); // allows us to run queries with pg


// middleware
app.use(cors());
app.use(express.json()); // let's us get back json data and then access data by req.body

// ROUTES // 

// create a todo
app.post("/todos", async(req,res) => {
    try{
        console.log(req.body);
    } catch( err ){
        console.error(err.message);
    }
})

// GET ALL TODOS

// GET A TODO

// UPDATE A TODO

// DELETE A TODO
 

app.listen(5000, () => {
    console.log("server has started on port 5000 ");
})