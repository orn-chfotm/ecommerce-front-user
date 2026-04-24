"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {SubmitEvent, useState} from "react";
import {LoginApi} from "@/features/auth/login/api/login-api";
import { ApiClientError } from "@/shared/api/api-client-error"

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
            const response = await LoginApi({
                email,
                password
            });

            if (response.accessToken && response.refreshToken) {
                localStorage.setItem('accessToken', response.accessToken);
                localStorage.setItem('refreshToken', response.refreshToken);

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