/**
 * API Error - thrown when an API request fails
 */
export class ApiError extends Error {
    status: number;
    data: unknown;

    constructor(message: string, status: number, data?: unknown) {
        super(message);
        this.name = "ApiError";
        this.status = status;
        this.data = data;
    }

    get isUnauthenticated() {
        return this.status === 401;
    }
}
