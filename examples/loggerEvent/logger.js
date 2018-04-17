const EventEmitter = require("events");

var url = "http://mylogger.io/log";

class Logger extends EventEmitter{
    //method
    log(message) {       
        //Send an HTTP request
        console.log(message);
        //raise an event -- making a noise, produce -signalling
        this.emit("messageLogged",{ id: 1, url: "http://"});
    }    
}

module.exports = Logger;