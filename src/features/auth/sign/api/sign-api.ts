import {HttpMethod} from "@/shared/api/api-http-method";
import {SignRequest, SignResponse} from "@/features/auth/sign/types";
import { apiBase } from "@/shared/api/api-base";
import { SuccessResponse } from "@/shared/api/api-types";

export async function signApi(request: SignRequest) : Promise<SuccessResponse<SignResponse>> {
    return await apiBase<SignResponse>('/v1/user', {
        method: HttpMethod.POST,
        body: JSON.stringify(request)
    });;
}