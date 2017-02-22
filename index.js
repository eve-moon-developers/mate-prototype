//Note this is simply an API example. The HTMNL examples will be a bit more complex.
const cluster = require('cluster');
const restify = require('restify');

if (cluster.isMaster) {
    //Set to a minimum of 4 threads for sanity.
    var numCPUs = require('os').cpus().length;
    if (numCPUs < 4) numCPUs = 4;


} else {

}