import { SignRequest } from "../types";

export default function signFormValidation(request: SignRequest): request is SignRequest {
    const {email, password, name, gender, birthDate} = request;

    if (email === "") {
        alert("이메일을 입력해 주세요.");
        return false;
    }
    if (!email.includes("@")) {
        alert("이메일 형식이 올바르지 않습니다.");
        return false;
    }

    if (password === "") {
        alert("비밀번호를 입력해 주세요.");
        return false;
    }
    if (name === "") {
        alert("이름을 입력해 주세요.");
        return false;
    }
    if (gender === "") {
        alert("성별을 선택해 주세요.");
        return false;
    }
    if (birthDate === "") {
        alert("생년월일을 선택해 주세요.");
        return false;
    }

    const parsedBirth = new Date(birthDate);
    if (Number.isNaN(parsedBirth.getTime())) {
        alert("생년월일이 올바르지 않습니다.");
        return false;
    }

    return true;
}
