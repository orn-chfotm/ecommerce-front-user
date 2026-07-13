"use client";

import {useRouter} from "next/navigation";
import {clearAuthTokens} from "@/shared/lib/auth-token";

export function useLogout() {
    const router = useRouter();

    const logout = () => {
        clearAuthTokens();
        router.push("/");
        router.refresh();
    };

    return {logout};
}