const express = require("express");

const app = express();


app.get("/", (req, res) => {
    res.send("Hello Team");
});



app.listen(8080, () => {
    console.log("server started at port 8080");
})
