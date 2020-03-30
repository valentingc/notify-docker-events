import EventParser from "./EventParser";
import { EventEmitter } from "events";

const parser: EventParser = new EventParser(new EventEmitter());

console.log("Starting to watch for events");
parser.readEvents();
