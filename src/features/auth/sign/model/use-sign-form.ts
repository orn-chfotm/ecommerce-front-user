import {SubmitEvent, useState} from "react";
import {Gender} from "./gender";
import signApi from "../api/sign-api";
import {ApiClientError} from "@/shared/api/api-client-error";
import {SignRequest} from "@/features/auth/sign/types";

export function useSignForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState<Gender | "">("");
    const [birthDate, setBirthDate] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

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
            birthDate: parsedBirth,
        };

        setIsLoading(true);
        try {
            return await signApi(request);
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
