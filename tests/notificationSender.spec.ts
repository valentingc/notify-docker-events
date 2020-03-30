import "mocha";
import { expect } from "chai";
import { NotificationSender } from "../src/notifications/NotificationSender";

describe("Send a simple message", () => {
    let sender: NotificationSender = undefined;
    before(() => {
        sender = new NotificationSender();
    });
    it("should send a message", async () => {
        const msg = await sender.send("test message");
        expect(msg).to.equal(true);
    });
});
