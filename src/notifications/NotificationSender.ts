export class NotificationSender {
    public send(message: string): Promise<boolean> {
        return new Promise((res, rej) => {
            res(true);
        });
    }
}