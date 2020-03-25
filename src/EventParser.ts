
import * as Docker from "dockerode";
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

    constructor() {
        this.con = new Docker({ host: "127.0.0.1", port: 3000 });
    }

    // look what's in the box for us
    private analyzeDetail(obj: string): void {
        const object: DockerEvent= JSON.parse(obj) as DockerEvent;
        console.log("Event Action? " + object.Action);

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