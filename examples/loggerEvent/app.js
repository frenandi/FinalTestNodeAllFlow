const EvenEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

//Register a listener ECS6
logger.on("messageLogged",(arg)=>{ //e, eventArg
    console.log("Listener called",arg);
});

logger.log("message");