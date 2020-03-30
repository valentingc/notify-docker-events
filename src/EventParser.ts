
import * as Docker from "dockerode";
import { EventEmitter } from "events";

interface DockerEvent {
    Action: string;
    Actor: object;
    from: string;
    id: string;
    scope: string;
    status: string;
    time: number;
    timeNano: number;
    Type: string;
}

export default class EventParser {
    private con: Docker;

    constructor(public eventEmitter: EventEmitter) {
        this.con = new Docker({ host: "127.0.0.1", port: 3000 });
        this.eventEmitter = eventEmitter;
    }

    // look what's in the box for us
    private analyzeDetail(obj: string): void {
        const object: DockerEvent= JSON.parse(obj) as DockerEvent;
        console.log("Event Action? " + object.Action);
        this.eventEmitter.emit("eventChanged", object);
    }

    public readEvents(): void {
        this.con.getEvents().then(stream => {
            // show some output for debugging purposes
            stream.pipe(process.stdout)

            // getEvent returns a readable stream
            stream.on('data', (data: string) => {
                console.log("Received new event");
                this.analyzeDetail(data);
            })
        });
    }
}