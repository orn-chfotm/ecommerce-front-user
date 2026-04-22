import {LoginRequest, LoginResponse} from "@/teautres/auth/login/model/types";
import {baseApi} from "@/shared/api/baseApi";
import {HttpMethod} from "@/shared/api/constants";

export async function LoginApi(request: LoginRequest) {
    return await baseApi<LoginResponse>('/v1/login/user', {
        method: HttpMethod.POST,
        body: JSON.stringify(request)
    });
}