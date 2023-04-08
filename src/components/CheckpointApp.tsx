import zinc_logo from "../assets/zinc_logo.svg";
import { FunctionComponent, useEffect, useState } from "react";
import CheckpointMenuTab from "./CheckpointTab";
import queue_icon from "../assets/queue_icon.svg";
import truck_icon from "../assets/truck_icon.svg";
import exit_icon from "../assets/exit_icon.svg";
import ShipsTab from "./ShipsTab";
import QueueTab from "./QueueTab";
import { useQuery } from "react-query";
import { API_URL, DELIVERY, fn } from "../Contraints";

interface CheckpointAppProps {
    token: string;
    setToken: any;
}

const CheckpointApp: FunctionComponent<CheckpointAppProps> = (props) => {
    let [currTab, setCurrTab] = useState("ships");

    return (
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-0 w-screen h-screen">
            <div className="border-gray border-b-[1px] max-h-16 min-w-[330px] flex py-[16px] justify-center items-center">
                <img
                    className="max-h-10"
                    src={zinc_logo}
                />
            </div>
            <div className="border-gray border-b-[1px]"></div>
            <div className="flex flex-col relative bg-white z-30 shadow-[0_2px_12px_0_rgba(0,0,0,0.2)]">
                {/* MENU drop-shadow-[0_2px_12px_rgba(0,0,0,0.2)] */}
                <CheckpointMenuTab
                    onClick={() => setCurrTab("ships")}
                    active={currTab == "ships"}
                    label="В ожидании погрузки"
                    icon={truck_icon}
                />
                <CheckpointMenuTab
                    onClick={() => setCurrTab("queue")}
                    active={currTab == "queue"}
                    label="Очередь"
                    icon={queue_icon}
                />
                <div
                    onClick={() => {
                        localStorage.removeItem("token");
                        props.setToken(null);
                    }}
                    className="cursor-pointer mt-auto px-4 py-3 hover:bg-gray flex flex-row border-solid border-t-[1px] border-gray">
                    <img src={exit_icon} />
                    <span className="font-bold align-middle text-left">
                        &nbsp;Выход
                    </span>
                </div>
            </div>
            {currTab == "ships" ? (
                <ShipsTab token={props.token} />
            ) : (
                <QueueTab token={props.token} />
            )}
        </div>
    );
};

export default CheckpointApp;
