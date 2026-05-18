import {apiBase} from "@/shared/api/api-base";
import {HttpMethod} from "@/shared/api/api-http-method";
import {LoginRequest, LoginResponse} from "@/features/auth/login/types";
import { SuccessResponse } from "@/shared/api/api-types";

export async function loginApi(request: LoginRequest) : Promise<SuccessResponse<LoginResponse>> {
    return await apiBase<LoginResponse>('/v1/login/user', {       
        method: HttpMethod.POST,
        body: JSON.stringify(request)
    });
}