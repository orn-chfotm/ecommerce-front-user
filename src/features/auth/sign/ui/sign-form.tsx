"use client";

import {Gender} from "@/features/auth/sign/model/gender";
import {useSignForm} from "@/features/auth/sign/model/use-sign-form";

export default function SignForm() {
    const {
        setEmail,
        setPassword,
        setName,
        gender,
        setGender,
        birthDate,
        setBirthDate,
        isLoading,
        onSubmit,
    } = useSignForm();

    return (
        <div className="flex min-h-[calc(100vh-160px)] items-center justify-center px-4">
            <form
                onSubmit={onSubmit}
                className="flex w-full max-w-md flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
                <input
                    type="email"
                    id="sign-email"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    name="email"
                    aria-label="이메일"
                    placeholder="이메일"
                    required
                    autoComplete="email"
                    onChange={(event) => setEmail(event.target.value)}
                />

                <input
                    type="password"
                    id="sign-password"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    name="password"
                    aria-label="비밀번호"
                    placeholder="비밀번호"
                    required
                    autoComplete="new-password"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <input
                    type="text"
                    id="sign-name"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-black"
                    name="name"
                    aria-label="이름"
                    placeholder="이름"
                    required
                    autoComplete="name"
                    onChange={(event) => setName(event.target.value)}
                />

                <div className="flex flex-col gap-1">
                    <label htmlFor="sign-gender" className="text-sm text-gray-600">
                        성별
                    </label>
                    <select
                        id="sign-gender"
                        name="gender"
                        className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
                        value={gender}
                        onChange={(event) => {
                            const value = event.target.value;
                            setGender(value === "" ? "" : (value as Gender));
                        }}
                    >
                        <option value="">선택해 주세요</option>
                        <option value={Gender.MAN}>남성</option>
                        <option value={Gender.WOMAN}>여성</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="sign-birth" className="text-sm text-gray-600">
                        생년월일
                    </label>
                    <input
                        type="date"
                        id="sign-birth"
                        name="birthDate"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-black"
                        value={birthDate}
                        onChange={(event) => setBirthDate(event.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-md bg-amber-500 px-4 py-3 text-white disabled:opacity-50"
                    disabled={isLoading}
                >
                    회원가입
                </button>
            </form>
        </div>
    );
}
