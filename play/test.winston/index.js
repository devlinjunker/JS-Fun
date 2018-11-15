var winston = require("winston");
require("winston-daily-rotate-file");

var Logger = winston.Logger;
var ConsoleTransport = winston.transports.Console;
var FileTransport = winston.transports.File;

var logger = new Logger();
logger.add(ConsoleTransport);
logger.add(FileTransport, {
  name: "info-file",
  filename: "./filelog-info.log",
  level: "info"
});
logger.add(FileTransport, {
  name: "error-file",
  filename: "./filelog-error.log",
  level: "error"
});
logger.add(winston.transports.DailyRotateFile, {
  filename: ".log",
  datePattern: "yyyyMMdd",
  prepend: "true"
});

logger.info("test");
logger.error("test!!!");
logger.log("info", "help");
