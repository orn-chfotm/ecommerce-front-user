import {HttpMethod} from "@/shared/api/api-http-method";
import {SignRequest, SignResponse} from "@/features/auth/sign/types";
import { apiBase } from "@/shared/api/api-base";

export default async function signApi(request: SignRequest) {
    return await apiBase<SignResponse>('/v1/user', {
        method: HttpMethod.POST,
        body: JSON.stringify(request)
    });;
}