var cluster = require("cluster");

console.log("Running client setup on " + cluster.worker.id + "...");