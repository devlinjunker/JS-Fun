# Testing Logging with Winston

Tests of Winston logging library, can create separate log files for each log level or add
plugins that ensure a log file is archived daily.

**ToDo:**  
[ ] Winston 3.0  

## Dependencies
Winston 2.3.1

## Example
`node index.js` to run the test file.

This should set up transports to the console and files for log messages. Creates a specific log file for errors and one for info messages. Also creates a rotating date log file that logs messages to a filename based on the current date in the format `yyyMMdd.log`

## Developer usage

Create a logger, then add Winson transports that define where the log messages are output.

```
import winston = require("winston");
var logger = new winston.Logger();
```

### Console output
```
logger.add(winston.transports.Console);
```

### Logging to file
```
logger.add(winson.transports.File, {
  name: "<unique>",
  filename: "<filename>",
  level: "info" || "error" || "debug"
});
```
### Daily Log File
```
logger.add(winston.transports.DailyRotateFile, {
  filename: ".log",
  datePattern: "yyyyMMdd",
  prepend: "true"
});
```

### Logging
```
logger.info("test");
```
or
```
logger.log("info", "help");
```
