log4js = require("log4js");

// var __dirname = "F:\XAVICA\GitHub\gitworkflow\Gayatri\ErrorHandling";

log4js.configure("logging.json");
logger = log4js.getLogger();

logger.error("This send you an email!");
logger.info("But won't.");

