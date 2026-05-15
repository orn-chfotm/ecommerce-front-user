import {SubmitEvent, useState} from "react";
import {Gender} from "./gender";
import signApi from "../api/sign-api";
import {ApiClientError} from "@/shared/api/api-client-error";
import {SignRequest, SignResponse} from "@/features/auth/sign/types";
import { SuccessResponse } from "@/shared/api/api-types";
import { useRouter } from "next/navigation";

export function useSignForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState<Gender | "">("");
    const [birthDate, setBirthDate] = useState("");
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (email === "") {
            alert("이메일을 입력해 주세요.");
            return;
        }
        if (!email.includes("@")) {
            alert("이메일 형식이 올바르지 않습니다.");
            return;
        }

        if (password === "") {
            alert("비밀번호를 입력해 주세요.");
            return;
        }
        if (name === "") {
            alert("이름을 입력해 주세요.");
            return;
        }
        if (gender === "") {
            alert("성별을 선택해 주세요.");
            return;
        }
        if (birthDate === "") {
            alert("생년월일을 선택해 주세요.");
            return;
        }

        const parsedBirth = new Date(birthDate);
        if (Number.isNaN(parsedBirth.getTime())) {
            alert("생년월일이 올바르지 않습니다.");
            return;
        }

        const request: SignRequest = {
            email,
            password,
            name,
            gender,
            birthDate,
        };

        setIsLoading(true);
        try {
            const response:SuccessResponse<SignResponse> = await signApi(request);
            if (response.data.id) {
                alert("회원가입이 완료되었습니다.");
                router.push("/login");
            }
        } catch (e) {   
            if (e instanceof ApiClientError) {
                if (e.isValidationFailed) {
                    alert(e.firstValidationLine);
                }
            } else {
                console.error(e);
                alert("회원가입 요청 중 오류가 발생했습니다.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        setEmail,
        setPassword,
        setName,
        gender,
        setGender,
        birthDate,
        setBirthDate,
        isLoading,
        onSubmit,
    };
}
