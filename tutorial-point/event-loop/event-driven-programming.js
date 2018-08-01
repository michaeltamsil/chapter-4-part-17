// Import events module
let events = require('events');

// Create an eventEmitter object
let eventEmitter = new events.EventEmitter()

// Bind event and event handler as follows
eventEmitter.on('eventName', eventHandler);

// fire an event
eventEmitter.emit('eventName');

// Create an event handler as follows
let connectHandler = function connected() {
    console.log('connection succesful.');

    // fire the data_received event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

