"use client";

import {useRouter, useSearchParams} from "next/navigation";
import {SubmitEvent, useState} from "react";
import {FailResponse} from "@/shared/types/api";
import {LoginApi} from "@/teautres/auth/login/api/login-api";

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
            const failResponse = e.body as FailResponse;

            console.error(`[${failResponse.status}] 시간: ${failResponse.timestamp}, 상세 메시지: ${failResponse.message}`);
            alert(`${failResponse.message}`);

            if (failResponse.data) {
                console.log(`에러 상세 메시지: ${failResponse.data}`);
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