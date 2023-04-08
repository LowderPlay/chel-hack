import {forwardRef} from "react";
import { MutableRefObject } from "react";
import { ReactSVG } from "react-svg";

export interface ILoginInputFieldProps {
    placeholder: string;
    icon: string;
    errorText?: string;
    password?: boolean;
    error?: boolean;
}

const defaultBorder = "gray";
const errorBorder = "red";

const LoginInputField = forwardRef((props: ILoginInputFieldProps, ref: any) => {
    
    let border = props.error ? errorBorder : defaultBorder;

    return (
        <div className="mb-4">
            <div
                className={`border-${border} rounded border-solid border-[1px] min-w-full flex flex-row w-16 mb-4`}>
                <div className="py-[6px] px-[15px]">
                    <ReactSVG
                        src={props.icon}
                        className={
                            props.error? "fill-red" : "fill-blue"
                        }
                    />
                </div>
                <div className="flex-grow">
                    <input
                        ref={ref}
                        placeholder={props.placeholder}
                        type={props.password ? "password" : "text"}
                        className="h-full w-full text-[20px] text-center focus:outline-none"
                    />
                </div>

            </div>
                {props.error ? (
                    <span className=" mb-4 text-[#E20008] text-center ">{props.errorText}</span>
                ) : (
                    <></>
                )}
        </div>
    );
});

export default LoginInputField;