import EventParser from "./EventParser";

const parser: EventParser = new EventParser();

console.log("Starting to watch for events");
parser.readEvents();
