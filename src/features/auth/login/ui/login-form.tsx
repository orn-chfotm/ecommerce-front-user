'use client';

import {useRouter} from "next/navigation";
import {useLoginForm} from "@/features/auth/login/model/login-form-use";

export default function LoginForm() {
    const router = useRouter();

    const {
        onChangeEvent,
        isLoading,
        onSubmit
    } = useLoginForm();

    return (
        <div className="flex min-h-[calc(100vh-160px)] items-center justify-center px-4">
            <form
                onSubmit={onSubmit}
                className="flex w-full max-w-md flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
                <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    name="email"
                    aria-label="이메일"
                    placeholder="아이디"
                    onChange={onChangeEvent}
                />

                <input
                    type="password"
                    id="password"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    name="password"
                    aria-label="비밀번호"
                    placeholder="비밀번호"
                    onChange={onChangeEvent}
                />

                <button
                    type="submit"
                    className="w-full rounded-md bg-amber-500 px-4 py-3 text-white disabled:opacity-50"
                    disabled={isLoading}
                >
                    로그인
                </button>

                <p className="text-center text-sm text-gray-600">
                    계정이 없으신가요?{" "}
                    <button
                        type="button"
                        className="font-medium text-amber-600 underline-offset-2 hover:text-amber-700 hover:underline"
                        onClick={() => router.push("/sign")}
                    >
                        회원가입
                    </button>
                </p>
            </form>
        </div>
    )
}