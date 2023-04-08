import { FunctionComponent, useState } from "react";
import exit_icon from "../assets/exit_icon.svg";
import { ReactSVG } from "react-svg";
import Button from "./Button";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { ACCEPT, WAITING_TRUCKS, fn } from "../Contraints";

interface StorekeeperAppProps {
    token: string;
    setToken: any;
}

const StorekeeperApp: FunctionComponent<StorekeeperAppProps> = (props) => {
    const queryClient = useQueryClient();

    let { mutate } = useMutation({
        mutationFn: ({
            id,
            storage,
        }: {
            id: String;
            storage: "SOUTH" | "NORTH";
        }) => fn(ACCEPT, props.token, { id, storage }),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["waitingTrucks"] });
        },
    });

    let { data } = useQuery({
        queryKey: ["waitingTrucks"],
        refetchInterval: 5000,
        queryFn: () => fn(WAITING_TRUCKS, props.token, null, "GET"),
    });

    function logout() {
        localStorage.removeItem("token");
        props.setToken(null);
    }

    return (
        <div className="h-screen w-screen">
            <div className="fixed bg-white w-full z-20 top-0 left-0 box-border border-b border-gray px-3 py-4">
                <div className="flex flex-row">
                    <ReactSVG
                        src={exit_icon}
                        className="w-6 h-6 cursor-pointer"
                        onClick={logout}
                    />
                    <span className="pl-8 font-bold">В ожидании погрузки</span>
                    <span className="pl-6 text-gray">{data?.length}</span>
                </div>
            </div>
            <div className="mt-14 px-4 py-4 min-h-full h-auto relative z-0 w-full bg-gray-light">
                {data?.map((el: any) => (
                    <div
                        key={el.id}
                        className="bg-white px-3 py-4 my-4 rounded-xl w-full h-auto">
                        <div className="flex flex-col ">
                            <div className="font-bold">
                                <span className="">Статус: </span>
                                <span className="text-green">
                                    ожидание погрузки
                                </span>
                            </div>
                            <div className="flex flex-col pt-1 text-[16px]">
                                <span className="card-span">
                                    Номер пропуска:
                                    <span className="card-value">
                                        &nbsp;{el.id}
                                    </span>
                                </span>
                                <span className="card-span">
                                    Авто:
                                    <span className="card-value">
                                        &nbsp;{el.truck}
                                    </span>
                                </span>
                                <span className="card-span">
                                    Вид продукции:
                                    <span className="card-value">
                                        &nbsp;{el.stockType}
                                    </span>
                                </span>
                                <span className="card-span">
                                    Объём продукции:
                                    <span className="card-value">
                                        &nbsp;{el.weight}
                                    </span>
                                </span>
                                <span className="card-span">
                                    Eдиница измерения:
                                    <span className="card-value">
                                        &nbsp;{el.weightUnit}
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-row pt-2 justify-between gap-6">
                                <Button
                                    onClick={() =>
                                        mutate({ id: el.id, storage: "SOUTH" })
                                    }
                                    slim
                                    secondary>
                                    Юж. Ворота
                                </Button>
                                <Button
                                    onClick={() =>
                                        mutate({ id: el.id, storage: "NORTH" })
                                    }
                                    slim
                                    secondary>
                                    Сев. Ворота
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StorekeeperApp;
