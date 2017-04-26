'use strict';

// Require Logic
var lib = require('lib');

// Lambda Handler
module.exports.handler = function(event, context) {
    console.log("Received Event:", event.clickType);
    lib.holaAll(event, function(error, response) {
        return context.succeed(lib.lambdaProxyResponse(200, response));
    });
};
