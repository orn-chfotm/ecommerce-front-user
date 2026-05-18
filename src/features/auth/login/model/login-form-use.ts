"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {ChangeEvent, SubmitEvent, useState} from "react";
import {loginApi} from "@/features/auth/login/api/login-api";
import {ApiClientError} from "@/shared/api/api-client-error";
import {setAuthTokens} from "@/shared/lib/auth-token";
import type {SuccessResponse} from "@/shared/api/api-types";
import type {LoginRequest, LoginResponse} from "@/features/auth/login/types";
export function useLoginForm() {
    const router = useRouter();
    const searchParam = useSearchParams();
    const redirectUrl = searchParam?.get("redirectUrl") || '/';

    const [form, setForm] = useState<LoginRequest>({
        email: '',
        password: '',
    });

    const onChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setForm({ ...form, [name as keyof LoginRequest]: value });
    };

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response: SuccessResponse<LoginResponse> = await loginApi(form);
            const {accessToken, refreshToken} = response.data;
            if (accessToken && refreshToken) {
                setAuthTokens(accessToken, refreshToken);
                router.push(redirectUrl);
                router.refresh();
            }

        } catch (e) {
            if (e instanceof ApiClientError) {
                alert(e.alertMessage);
            } else {
                console.error(e);
                alert("로그인 요청 중 오류가 발생했습니다.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        onChangeEvent,
        isLoading,
        onSubmit
    }
}