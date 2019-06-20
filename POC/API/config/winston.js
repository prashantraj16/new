let appRoot = require('app-root-path')
let winston = require('winston')

let options = {
    file:{
        level: 'info',
        filename : '${appRoot}/logs/app.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxfiles: 100,
        colorize: true
    },
    console:
    {
        level: 'debug',
        handleExceptions: true,
        json: true,
        colorize: true
    }
}




var logger = new winston.createLogger({
transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.file)
    ],
exitOnError: false
});

logger.stream = {
    write: function(message, encoding)
    {
        logger.info(message);
    }
};


module.exports = logger;