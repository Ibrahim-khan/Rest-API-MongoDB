const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
});

//Route not found (Wrong address)
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found",
    });
});

// handle Server Error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Something Broke",
    });
});


module.exports =app;