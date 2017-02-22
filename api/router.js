const Router = require('restify-router');
var apiRouter = new Router();

apiRouter.use(function(req, res, next) {
    console.log("API Middleware.");
});

module.exports = apiRouter;