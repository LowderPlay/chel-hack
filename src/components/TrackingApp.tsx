import { FunctionComponent, useMemo } from "react";
import { useParams } from "react-router";
import { ReactSVG } from "react-svg";
import ugmc_logo from "../assets/ugmc_logo.svg";
import zinc_logo from "../assets/zinc_logo.svg";
import { useQuery } from "react-query";
import { DELIVERY_STATUS, fn } from "../Contraints";
import scheduled from "../assets/Hack_Chelabisk/SCHEDULED.svg";
import arrived from "../assets/Hack_Chelabisk/ARRIVED.svg";
import checkpoint from "../assets/Hack_Chelabisk/CHECKPOINT.svg";
import waiting from "../assets/Hack_Chelabisk/WAITING.svg";
import loading_north from "../assets/Hack_Chelabisk/LOADING_NORTH.svg";
import loading_south from "../assets/Hack_Chelabisk/LOADING_SOUTH.svg";
enum DeliveryState {
    SCHEDULED = "SCHEDULED",
    ARRIVED = "ARRIVED",
    CHECKPOINT = "CHECKPOINT",
    WAITING = "WAITING",
    LOADING = "LOADING",
    COMPLETED = "COMPLETED",
}

const TrackingApp: FunctionComponent = () => {
    let { id }: { id: string } = useParams();
    let { data } = useQuery({
        refetchInterval: 5000,
        queryKey: ["deliveryStatus"],
        queryFn: () => fn(DELIVERY_STATUS, undefined, {id}, "POST"),
    });
    let state = "";
    let pic = "";

    switch (data?.state) {
        case DeliveryState.SCHEDULED:
            state = "Получите пропуск на КПП";
            pic = scheduled;
            break;
        case DeliveryState.ARRIVED:
            state = "Ожидайте очередь";
            pic = arrived
            break;
        case DeliveryState.CHECKPOINT:
            state = "Пройдите досмотр на КПП";
            pic = checkpoint;
            break;
        case DeliveryState.WAITING:
            state = "Ожидайте погрузки";
            pic = waiting;
            break;
        case DeliveryState.LOADING:
            let sideside = data.storage == "NORTH";
            let side = sideside ? "северному" : "южному";
            pic = sideside ? loading_north : loading_south;
            state = `Проследуйте к ${side} входу`;
            break;
        case DeliveryState.COMPLETED:
            state = "Заказ выдан";
            break;
    }
    
    

    return (
        <div>
            <div className="flex justify-between px-8 py-4 flex-row  bg-white w-full box-border border-b border-gray">
                <div className="min-w-[110px]">
                    <ReactSVG
                        className="w-full h-full"
                        src={zinc_logo}
                    />
                </div>
                <div className="min-w-[110px]">
                    <ReactSVG
                        className="w-full h-full"
                        src={ugmc_logo}
                    />
                </div>
            </div>
            <div className="w-screen min-h-[calc(100vh-4.5rem)] bg-gray-light pt-6">
                <div className="rounded-xl mx-5 px-8 py-6 mb-6 w-auto h-auto bg-white">
                    <div className="flex flex-col">
                        <span className="font-bold text-3xl py-3">{state}</span>
                        <img className="self-center w-auto h-[15rem]" src={pic}/>
                    </div>
                </div>
                <div className="rounded-xl mx-5 px-8 py-6 w-auto h-auto bg-white flex flex-col">
                    <span className="card-span text-xl">Номер пропуска:</span>
                    <span className="card-value font-bold text-3xl pb-4">{data?.id}</span>
                    <span className="card-span text-xl">Номер КПП:</span>
                    <span className="card-value font-bold text-3xl pb-4">КПП №6</span>
                </div>
            </div>
        </div>
    );
};

export default TrackingApp;
