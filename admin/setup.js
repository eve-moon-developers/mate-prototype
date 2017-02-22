var cluster = require("cluster");

if (cluster.isMaster) {
    console.log("Running admin setup on master...");
} else {
    console.log("Running admin setup on " + cluster.worker.id + "...");
}

var Restify = require('restify');

var admin_server = Restify.createServer();

admin_server.use(Restify.queryParser());
admin_server.use(Restify.bodyParser());
admin_server.use(require("admin/source/admin_auth_requirement"));

admin_server.get(/.*/, Restify.serveStatic({
    'directory': 'admin/client',
    'default': 'index.html'
}));

admin_server.listen(global.config.admin.PORT);