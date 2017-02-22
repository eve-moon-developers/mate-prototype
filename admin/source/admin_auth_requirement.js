const QueryString = require('querystring');
const FS = require("fs");

var index_file = FS.readFileSync("admin/client/index.html").toString();

module.exports = function(req, res, next) {
    console.log("Admin request recieved.");
    if (!req.params.auth) {
        res.end(index_file);
    } else {
        next();
    }
}