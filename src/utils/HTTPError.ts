export class HTTPError extends Error {
    private status: number;
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
