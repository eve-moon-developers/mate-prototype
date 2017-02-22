const cluster = require("cluster");

if (cluster.isMaster) {
    console.log("Running server core setup on master...");
} else {
    console.log("Running server core setup on " + cluster.worker.id + "...");
}