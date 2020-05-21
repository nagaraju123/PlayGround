const amqplib = require("amqplib");

connect();

async function connect() {
    try {
        const connecction = await amqplib.connect("amqp://localhost:5672");

        const channel = await connecction.createChannel();

        const queue = await channel.assertQueue("job");

        const queueJobs = await channel.assertQueue("jobs");

        channel.sendToQueue("job", new Buffer(JSON.stringify({ name: "Nagaraju" })));

        // channel.sendToQueue("job1", new Buffer(JSON.stringify({ name: "Nagaraju" })));

        console.log("job send completed");






    } catch (ex) {
        console.log(ex, "  error is ");
    }



}