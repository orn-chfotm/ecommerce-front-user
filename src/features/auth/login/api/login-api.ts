import {apiClient} from "@/shared/api/api-client";
import {HttpMethod} from "@/shared/api/api-http-method";
import {LoginRequest, LoginResponse} from "@/features/auth/login/types";

export async function LoginApi(request: LoginRequest) {
    return await apiClient<LoginResponse>('/v1/login/user', {
        method: HttpMethod.POST,
        body: JSON.stringify(request)
    });
}