var cluster = require("cluster");

if (cluster.isMaster) {
    console.log("Running admin setup on master...");
} else {
    console.log("Running admin setup on " + cluster.worker.id + "...");
}

global.config = require("config/master");