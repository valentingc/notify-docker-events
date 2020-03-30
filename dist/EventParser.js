"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Docker = require("dockerode");
class EventParser {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
        this.con = new Docker({ host: "127.0.0.1", port: 3000 });
        this.eventEmitter = eventEmitter;
    }
    analyzeDetail(obj) {
        const object = JSON.parse(obj);
        console.log("Event Action? " + object.Action);
        this.eventEmitter.emit("eventChanged", object);
    }
    readEvents() {
        this.con.getEvents().then(stream => {
            stream.pipe(process.stdout);
            stream.on('data', (data) => {
                console.log("Received new event");
                this.analyzeDetail(data);
            });
        });
    }
}
exports.default = EventParser;
//# sourceMappingURL=EventParser.js.map