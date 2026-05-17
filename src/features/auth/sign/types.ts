import {Gender} from "@/features/auth/sign/model/gender";

export type GenderSelectValue = Gender | '';

interface Sign {
    email: string,
    password: string,
    name: string,
    gender: GenderSelectValue,
    birthDate: string
}

export type SignRequest = Sign;

export interface SignResponse extends Sign{
    id: number,
}