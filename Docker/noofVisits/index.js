const express = require("express");
const redis = require("redis");
const process=require("process");


const app = express();

const client = redis.createClient({
    host: "redis-server",
    port: 6379
});
client.set("visits", 0);


app.get("/", (req, res) => {
    process.exit(0);

    client.get("visits", (err, noofVisits) => {
        res.send("No of times " + noofVisits);

        client.set("visits",parseInt(noofVisits) + 1);
    });
})




app.listen(8080, () => {
    console.log("server started at port 8080");
});
