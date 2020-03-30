"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventParser_1 = require("./EventParser");
const events_1 = require("events");
const parser = new EventParser_1.default(new events_1.EventEmitter());
console.log("Starting to watch for events");
parser.readEvents();
//# sourceMappingURL=index.js.map