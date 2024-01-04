import React, { InputHTMLAttributes } from "react";
import { InputData } from "./styles";
import { useFormContext } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    width?: string
    fieldName: string
}


export const Input: React.FC<InputProps> = ({ fieldName, ...restProps }) => {
    const { register } = useFormContext()

    return <InputData {...restProps} {...register(fieldName)}/>;
}