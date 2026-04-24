import { ApiClientError } from "./api-client-error";
import {HttpMethod} from "@/shared/api/api-http-method";
import {SuccessResponse} from "@/shared/api/api-types";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL ?? '';

if (!BASE_URL) {
    console.warn('API base URL is not configured. Set NEXT_PUBLIC_BACKEND_API_URL in your env file.');
}

export const apiBase = async <T> (
    endpoint: string,
    options: RequestInit= {}
) : Promise<SuccessResponse<T>> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
            headers: {
                'Content-type': 'application/json',
                ...(options.headers ?? {}),
            },
            method: options.method ?? HttpMethod.GET,
            body: options.body,
            cache: 'no-store'
        }
    )

    if (!response.ok) {
        const failResponse = await response.json();
        throw new ApiClientError(failResponse);
    }

    const successResponse = (await response.json()) as SuccessResponse<T>;
    return successResponse;
}