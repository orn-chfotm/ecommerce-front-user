"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {SubmitEvent, useState} from "react";
import {LoginApi} from "@/features/auth/login/api/login-api";
import {ApiClientError} from "@/shared/api/api-client-error";
import type {SuccessResponse} from "@/shared/api/api-types";
import type {LoginResponse} from "@/features/auth/login/types";
export function useLoginForm() {
    const router = useRouter();
    const searchParam = useSearchParams();
    const redirectUrl = searchParam?.get("redirectUrl") || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const response: SuccessResponse<LoginResponse> = await LoginApi({
                email,
                password
            });

            const {accessToken, refreshToken} = response.data;
            if (accessToken && refreshToken) {
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                router.push(redirectUrl);
                router.refresh();
            }

        } catch (e) {
            if (e instanceof ApiClientError) {
                if (e.isValidationFailed) {
                    alert(e.firstValidationLine);
                } else {
                    alert(e.body.message);
                }
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        setEmail,
        setPassword,
        isLoading,
        onSubmit
    }
}