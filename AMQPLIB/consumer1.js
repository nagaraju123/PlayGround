const amqplib = require("amqplib");

connect();

async function connect() {
    try {
        const connecction = await amqplib.connect("amqp://localhost:5672");

        const channel = await connecction.createChannel();

        const queue = await channel.assertQueue("job1");

        channel.consume('job1', name => {
            console.log(JSON.parse(name.content.toString()));
            channel.ack(name);
        })

    } catch (ex) {
        console.log(ex, "  error is ");
    }



}