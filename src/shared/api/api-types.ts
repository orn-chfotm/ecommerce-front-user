interface Response {
    timestamp: string,
    status: number,
    message?: string,
}

export interface SuccessResponse<T> extends Response {
    data: T
}

export interface ClientErrorResponse {
    headers: Headers,
    statusCode: string,
    statusCodeValue: number,
    body: FailResponse
}

export interface FailResponse extends Response{
    data?: ValidationError[]
}

export interface ValidationError {
    field: string;
    message: string;
}
