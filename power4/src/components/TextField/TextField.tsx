import {FormEvent, InputHTMLAttributes, ReactNode} from "react";

export interface TextFieldProps {
    label?: ReactNode,
    value: string,
    onInput: (value: string, event: FormEvent<HTMLInputElement>) => any,
    input?: InputHTMLAttributes<HTMLInputElement>
}
export default function TextField(
    {
        label,
        value,
        onInput,
        input = {},
    }: TextFieldProps
) {
    return (
        <div>
            {!!label && <label>{label}</label>}
            <input
                value={value}
                onInput={(event) => onInput((event.target as HTMLInputElement).value || '', event)}
            />
        </div>
    )
}
