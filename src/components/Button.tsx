import React,{ FunctionComponent } from "react";

export interface ButtonProps {
    children: string | string[] | JSX.Element | JSX.Element[];
    slim?: boolean;
    secondary?: boolean;
    full?: boolean;
    submit?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    return (
        <button
            type={props.submit ? "submit" : "button"}
            onClick={props.onClick}
            className={(props.slim ? " py-1" : " py-3") +
                        (props.secondary ? " bg-blue-light text-blue" : " bg-blue text-white") +
                        (props.full ? " w-full" : " w-auto") +
                " cursor-pointer w-full min-h-full rounded-md"}>
            {props.children}
        </button>
    );
}
export default Button;