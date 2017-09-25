var util = require("util")
var winston = require('winston');
var log_file = process.cwd() + '/app/log/node.log'
var logger = new(winston.Logger)({
    transports: [
        new(winston.transports.Console)({
            json: false,
            timestamp: function() {
                return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
            }
        }),
        new(winston.transports.File)({
            filename: log_file,
            json: false,
            timestamp: function() {
                return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
            }
        })
    ]
});
logger.info("init log file: " + log_file);

function fmtObj(obj) {
    return JSON.stringify(util.inspect(obj, {depth: null}));
}

function logObj(obj) {
    logger.info(fmtObj(obj));
}
exports.info = logger.info;
exports.logObj = logObj;
