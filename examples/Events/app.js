const EvenEmitter = require("events");
const emitter =  new EvenEmitter();

//Register a listener
emitter.on("messageLogged",function(arg){ //e, eventArg
    console.log("Listener called",arg);
});

//raise an event -- making a noise, produce -signalling
emitter.emit("messageLogged",{ id: 1, url: "http://"});
