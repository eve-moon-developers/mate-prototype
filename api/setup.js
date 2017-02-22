var cluster = require("cluster");

console.log("Running api setup on " + cluster.worker.id + "...");