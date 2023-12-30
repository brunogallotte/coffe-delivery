import React, { InputHTMLAttributes } from "react";
import { InputData } from "./styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    width?: string
}


export const Input: React.FC<InputProps> = ({ ...restProps }) => {
    return <InputData {...restProps} />;
  };