"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {hasAccessToken, subscribeAuthChange} from "@/shared/lib/auth-token";

export default function HeaderAuthNav() {
    const pathname = usePathname();
    /** SSR/첫 페인트에서는 localStorage를 읽지 않음 → 로그인→회원정보 깜빡임 방지 */
    const [isReady, setIsReady] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const sync = () => setIsLoggedIn(hasAccessToken());
        sync();
        setIsReady(true);
        return subscribeAuthChange(sync);
    }, [pathname]);

    if (!isReady) {
        return (
            <span
                className="inline-block min-w-[4.5rem] text-sm text-transparent select-none"
                aria-hidden
            >
                로그인
            </span>
        );
    }

    if (isLoggedIn) {
        return (
            <Link
                href="/mypage"
                className="font-medium text-amber-600 transition-colors hover:text-amber-700"
            >
                회원 정보
            </Link>
        );
    }

    return (
        <Link
            href="/login"
            className="font-medium text-amber-600 transition-colors hover:text-amber-700"
        >
            로그인
        </Link>
    );
}
