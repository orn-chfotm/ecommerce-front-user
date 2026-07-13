"use client";

import {useLogout} from "@/features/auth/logout/model/use-logout";

export default function LogoutButton() {
    const {logout} = useLogout();

    return (
        <button
            type="button"
            onClick={logout}
            className="font-medium text-gray-600 transition-colors hover:text-amber-600"
        >
            로그아웃
        </button>
    );
}