import {apiBase} from "@/shared/api/api-base";
import {HttpMethod} from "@/shared/api/api-http-method";
import {SignRequest, SignResponse} from "@/features/auth/sign/types";

export default async function signApi(request: SignRequest) {
    const response = await apiBase<SignResponse>('/v1/user', {
        method: HttpMethod.POST,
        body: JSON.stringify(request)
    });
    return response;
}