interface Response {
    timestamp: string,
    status: number,
    message?: string,
}

export interface SuccessResponse<T> extends Response {
    data: T
}

export interface FailResponse<T = unknown> extends Response{
    data?: T
}