import {Gender} from "@/features/auth/sign/model/gender";

interface Sign {
    email: string,
    password: string,
    name: string,
    gender: Gender,
    birthDate: string
}

export type SignRequest = Sign;

export interface SignResponse extends Sign{
    id: number,
}