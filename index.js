//This file will start the MATE cluster.
const cluster = require('cluster');
const util = require('util');

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    var runtime = require("core/runtime/thread_setup");
    var server = require("server/setup");
    var admin = require("admin/setup");

    var threads = global.config.server.threads;

    var message = "! Starting MATE cluster with " + threads + " threads !";

    console.log("");
    console.log("!".repeat(message.length))
    console.log(message);
    console.log("!".repeat(message.length))
    console.log("");

    for (let i = 0; i < threads; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });

    var readyCount = 0;

    cluster.on('message', (worker, message, handle) => {
        console.log(message);
        if (message === "Ready!") {
            readyCount++;
            if (readyCount === threads) {
                var message = "! MATE Cluster Startup Complete !";

                console.log("");
                console.log("!".repeat(message.length))
                console.log(message);
                console.log("!".repeat(message.length))
                console.log("");

                require("server/info/print_settings")
            }
        }
    });
} else {
    require("core/runtime/thread_setup");
    require("api/setup");
    require("client/setup");
    process.send("Ready!");
}