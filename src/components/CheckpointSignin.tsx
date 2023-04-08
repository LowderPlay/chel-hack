import React, { Component, useEffect, useRef, useState } from "react";
import Logos from "./Logos";
import mail_icon from "../assets/mail_icon.svg";
import pass_icon from "../assets/pass_icon.svg";
import LoginInputField from "./LoginInputField";
import Button from "./Button";
import { useQuery } from "react-query";
import { API_URL, AUTH } from "../Contraints";

export interface ICheckpointSigninProps {
    setToken: React.Dispatch<React.SetStateAction<string>>;
    setRole: React.Dispatch<React.SetStateAction<string>>;
}

export default function CheckpointSignin(props: ICheckpointSigninProps) {
    let emailRef = useRef<HTMLInputElement>();
    let passRef = useRef<HTMLInputElement>();

    const { data, isSuccess, refetch, isError } = useQuery({
        enabled: false,
        queryKey: ["login"],
        cacheTime: 0,
        retry: false,
        queryFn: () =>
            fetch(API_URL + AUTH, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: emailRef.current?.value,
                    password: passRef.current?.value,
                }),
            }).then((res) => res.json()),
    });
    useEffect(() => {
        if (isSuccess) {
            console.log("SETTED TOKEN");
            localStorage.setItem("token", data.token);
            props.setToken(data.token);
            props.setRole(data.role)
        }
    }, [data]);
    return (
        <div className="wrapper bg-defbg flex flex-col items-center mt-[6rem] ">
            <div className="text-center flex justify-items-center max-w-2xl flex-col justify-center">
                <Logos />
                <span className="text-[40px] my-8 font-sans-serif">
                    Вход в кабинет
                </span>
                <LoginInputField
                    ref={emailRef}
                    placeholder="Электронная почта"
                    error={isError}
                    errorText=""
                    icon={mail_icon}
                />
                <LoginInputField
                    ref={passRef}
                    error={isError}
                    placeholder="Пароль"
                    errorText="Неверный пароль или имя пользователя"
                    icon={pass_icon}
                    password
                />
                <Button
                    submit
                    full
                    onClick={() => refetch()}>
                    Войти
                </Button>
            </div>
            <span className="text-[#B3B3B3] mt-8 max-w-f text-center">
                При возникновении проблем со входом, обратитесь к администратору{" "}
                <br />
                для восстановления доступа: <br />8 800 555 33 44 или
                super-admin@zink.ru
            </span>
        </div>
    );
}
