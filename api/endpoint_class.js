const _ = require('underscore');

module.exports = class Endpoint {
    /*
    The endpoint class is a suger class for handling endpoint authorization. It handles the SSO Tokens and more.

    The only argument is an object with configuration data:
        request_type: {GET, POST, PUT, DELETE},
        authorization_type: {PUBLIC, UNSECURE, SECURE },
        permissions_required: ["array of string permissions"],
        title: "friendly title for the endpoint",
        description: "string description of the endpoint.", 
        handler: function (res, req, next) OR [array of function(res, req, next) ],
        iferrors: OPTIONAL function()
     */
    constructor(init_values) {
        this.request_type = init_values.request_type;
        if (!request_type) {
            throw "Missing request type.";
        } else if (request_type !== "GET" || request_type !== "POST" || request_type !== "PUT" || request_type !== "DELETE") {
            throw "Invalid request type.";
        };

        this.authorization_type = init_values.authorization_type;
        if (!authorization_type) {
            throw "Missing authorization type.";
        } else if (authorization_type !== "PUBLIC" || authorization_type !== "UNSECURE" || authorization_type !== "SECURE") {
            throw "Invalid authorization type.";
        };

        this.permissions_required = init_values.permissions_required;
        if (!permissions_required) {
            throw "Missing permissions required.";
        }

        this.title = init_values.title;
        if (!title) {
            throw "Missing title.";
        }

        this.description = init_values.description;
        if (!description) {
            throw "Missing description.";
        };

        this.handler = init_values.handler;
        if (!handler) {
            throw "Missing handler.";
        } else if (_.isArray(handler)) {
            handler.forEach(fun => {
                if (!_.isFunction(fun)) {
                    throw "Array handler contains non function object.";
                }
            });
        } else if (!_.isFunction(handler)) {
            throw "Handler is not a function.";
        }
    };

    /*
        Adds the endpoint to the workers 
    */

}