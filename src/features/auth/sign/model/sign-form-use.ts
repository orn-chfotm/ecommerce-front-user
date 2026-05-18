import {ChangeEvent, SubmitEvent, useState} from "react";
import {signApi} from "../api/sign-api";
import {ApiClientError} from "@/shared/api/api-client-error";
import {SignRequest, SignResponse} from "@/features/auth/sign/types";
import { SuccessResponse } from "@/shared/api/api-types";
import { useRouter } from "next/navigation";
import signFormValidation from "./sign-form-validation";

export function useSignForm() {
    const [form, setForm] = useState<SignRequest>({
        email: '',
        password: '',
        name: '',
        gender: '',
        birthDate: '',
    });

    const onChangeEvent = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;

        setForm({ ...form, [name as keyof SignRequest]: value });
    };
    
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        signFormValidation(form);

        setIsLoading(true);
        try {
            const response:SuccessResponse<SignResponse> = await signApi(form);
            if (response.status === 200) {
                alert("회원가입이 완료되었습니다.");
                router.push("/login");
            }
        } catch (e) {
            if (e instanceof ApiClientError) {
                alert(e.alertMessage);
            } else {
                console.error(e);
                alert("회원가입 요청 중 오류가 발생했습니다.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        onChangeEvent,
        isLoading,
        onSubmit,
    };
}
