import {HttpMethod} from "@/shared/api/api-http-method";
import { ApiClientError } from "./api-client-error";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL ?? '';

if (!BASE_URL) {
    console.warn('API base URL is not configured. Set NEXT_PUBLIC_BACKEND_API_URL in your env file.');
}

export const apiClient = async <T> (
    endpoint: string,
    options: RequestInit= {}
) : Promise<T> => {
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
        throw new ApiClientError(await response.json());
    }

    const data: T = await response.json();
    return data;
}