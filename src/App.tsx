import Logos from "./components/Logos";
import { Redirect, Route, Router, Switch } from "react-router";
import CheckpointSignin from "./components/CheckpointSignin";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import CheckpointApp from "./components/CheckpointApp";
import StorekeeperApp from "./components/StorekeeperApp";
import { API_URL, ME } from "./Contraints";
import { useQueries, useQuery } from "react-query";

const history = createBrowserHistory();

interface IAppProps {
    history: History;
}

export default function App() {
    let [token, setToken] = useState(localStorage.getItem("token") ?? "");
    let [role, setRole] = useState("");

    let { refetch } = useQuery({
        queryKey: ["me"],
        enabled: false,
        queryFn: () =>
            {
                // if (token && role) return;
                return fetch(API_URL + ME, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                }).then((res) => res.json());
            },
        onSuccess: (data) => setRole(data?.user.role),
    });

    useEffect(() => {
        refetch();
    })

    if (!token) {
        return (
            <CheckpointSignin
                setRole={setRole}
                setToken={setToken}
            />
        );
    }

    if (role == "SECURITY") {
        return (
            <CheckpointApp
                setToken={setToken}
                token={token}
            />
        );
    } else if (role == "STOREKEEPER") {
        return (
            <StorekeeperApp
                setToken={setToken}
                token={token}
            />
        );
    }
    return <>...</>;
}
